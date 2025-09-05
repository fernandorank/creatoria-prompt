
import React, { useState } from 'react';
import type { PromptCollection, PromptVariation } from '../types';
import { XIcon } from './icons/XIcon';
import { CopyIcon } from './icons/CopyIcon';
import { CheckIcon } from './icons/CheckIcon';

interface CollectionDetailModalProps {
  collection: PromptCollection;
  onClose: () => void;
  onCopyPrompt: () => void;
}

const CollectionDetailModal: React.FC<CollectionDetailModalProps> = ({ collection, onClose, onCopyPrompt }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  const handleCopy = (variation: PromptVariation) => {
    navigator.clipboard.writeText(variation.prompt);
    setCopiedId(variation.id);
    onCopyPrompt();
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="collection-title"
    >
      <div
        className="bg-slate-900 border border-slate-700/50 rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl shadow-cyan-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700/50 shrink-0">
          <h2 id="collection-title" className="text-xl font-bold text-white">{collection.title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <div className="space-y-8">
            {collection.variations.map((variation) => (
              <div key={variation.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Media Preview */}
                <div className="aspect-video rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
                  {collection.type === 'image' ? (
                    <img src={variation.mediaUrl} alt="Prompt variation preview" className="w-full h-full object-contain" />
                  ) : (
                    <video src={variation.mediaUrl} controls muted loop playsInline className="w-full h-full object-contain" />
                  )}
                </div>

                {/* Prompt Details */}
                <div className="flex flex-col h-full">
                   <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 flex-grow">
                     <pre className="text-slate-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                        <code>{variation.prompt}</code>
                     </pre>
                   </div>
                   <button
                    onClick={() => handleCopy(variation)}
                    className="mt-4 w-full px-4 py-2 text-sm font-semibold text-slate-900 bg-cyan-500 rounded-md hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 disabled:bg-slate-600"
                    disabled={copiedId === variation.id}
                   >
                     {copiedId === variation.id ? (
                        <>
                            <CheckIcon className="w-5 h-5" />
                            <span>Copiado!</span>
                        </>
                     ) : (
                        <>
                            <CopyIcon className="w-5 h-5" />
                            <span>Copiar Prompt</span>
                        </>
                     )}
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetailModal;
