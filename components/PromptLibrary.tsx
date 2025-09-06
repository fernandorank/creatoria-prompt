
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { promptCollections as initialCollections } from '../data/prompts';
import type { PromptCollection, PromptCollectionType } from '../types';
import { SearchIcon } from './icons/SearchIcon';
import { ImageIcon } from './icons/ImageIcon';
import { VideoIcon } from './icons/VideoIcon';
import { GripVerticalIcon } from './icons/GripVerticalIcon';
import { TrashIcon } from './icons/TrashIcon';
import CollectionDetailModal from './CollectionDetailModal';
import Toast from './Toast';

type FilterType = 'all' | PromptCollectionType;
type ToastState = { id: number; message: string; type: 'success' | 'error' } | null;

const PromptLibrary: React.FC = () => {
  const [collections, setCollections] = useState<PromptCollection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedCollection, setSelectedCollection] = useState<PromptCollection | null>(null);
  const [isReordering, setIsReordering] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      try {
        setCollections(initialCollections);
      } catch (err) {
        setError('Failed to load prompt collections.');
        showToast('Failed to load collections.', 'error');
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToast({ id: Date.now(), message, type });
  }, []);

  const filteredCollections = useMemo(() => {
    return collections
      .filter(collection => activeFilter === 'all' || collection.type === activeFilter)
      .filter(collection =>
        collection.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [collections, searchQuery, activeFilter]);

  const stats = useMemo(() => ({
    all: collections.length,
    image: collections.filter(c => c.type === 'image').length,
    video: collections.filter(c => c.type === 'video').length,
  }), [collections]);

  const handleDelete = (collectionId: string) => {
    if (window.confirm('Tem certeza de que deseja excluir esta coleção? Esta ação não pode ser desfeita.')) {
      setCollections(prev => prev.filter(c => c.id !== collectionId));
      showToast('Collection deleted successfully.', 'success');
    }
  };
  
  // Drag and Drop handlers
  const onDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData('draggedIndex', index.toString());
    e.currentTarget.classList.add('opacity-50', 'scale-105');
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  
  const onDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData('draggedIndex'), 10);
    const newCollections = [...collections];
    const [draggedItem] = newCollections.splice(draggedIndex, 1);
    newCollections.splice(dropIndex, 0, draggedItem);
    setCollections(newCollections);
  };
  
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('opacity-50', 'scale-105');
  };


  if (isLoading) {
    return <div className="flex items-center justify-center h-screen"><div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div></div>;
  }
  
  if (error) {
    return <div className="flex items-center justify-center h-screen text-red-400">{error}</div>;
  }

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl tracking-tight">
            Biblioteca de Prompts
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Explore coleções, descubra variações e copie prompts para seus projetos de IA.
          </p>
        </div>

        {/* Stats & Filters */}
        <div className="py-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar coleções..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full bg-slate-800 border border-slate-700 rounded-md py-2 pl-10 pr-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FilterButton label="Todos" count={stats.all} active={activeFilter === 'all'} onClick={() => setActiveFilter('all')} />
              <FilterButton label="Imagens" count={stats.image} active={activeFilter === 'image'} onClick={() => setActiveFilter('image')} />
              <FilterButton label="Vídeos" count={stats.video} active={activeFilter === 'video'} onClick={() => setActiveFilter('video')} />
            </div>
          </div>
           <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsReordering(!isReordering)}
                className={`px-4 py-2 text-sm font-semibold rounded-md flex items-center gap-2 transition-colors ${
                  isReordering
                    ? 'bg-cyan-500 text-slate-900'
                    : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                }`}
              >
                {isReordering ? 'Concluir Reordenação' : 'Reordenar Coleções'}
              </button>
            </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCollections.map((collection, index) => (
             <div
              key={collection.id}
              draggable={isReordering}
              onDragStart={(e) => onDragStart(e, index)}
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, index)}
              onDragEnd={onDragEnd}
              className={`group relative rounded-lg overflow-hidden border-2 border-slate-800 bg-slate-800/50 transition-all duration-300 ${isReordering ? 'cursor-move' : 'cursor-pointer hover:border-cyan-500/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10'}`}
             >
                <div className="absolute top-2 right-2 z-10 flex gap-2">
                  {isReordering && (
                     <div className="p-2 bg-slate-900/50 rounded-full text-white">
                        <GripVerticalIcon className="w-5 h-5"/>
                     </div>
                  )}
                   <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(collection.id);
                    }}
                    className="p-2 bg-slate-900/50 rounded-full text-slate-300 hover:bg-red-500 hover:text-white transition-colors"
                    aria-label="Delete collection"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>

                <div onClick={() => !isReordering && setSelectedCollection(collection)}>
                    <img src={collection.thumbnailUrl} alt={collection.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="p-1 bg-slate-900/50 rounded-md">
                                {collection.type === 'image' ? <ImageIcon className="w-4 h-4 text-cyan-400" /> : <VideoIcon className="w-4 h-4 text-cyan-400" />}
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">{collection.type}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white">{collection.title}</h3>
                        <p className="text-sm text-slate-300">{collection.variations.length} variações</p>
                    </div>
                </div>
            </div>
          ))}
        </div>
        {filteredCollections.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400">Nenhuma coleção encontrada. Tente ajustar sua busca ou filtros.</p>
          </div>
        )}
      </div>

      {selectedCollection && (
        <CollectionDetailModal 
          collection={selectedCollection} 
          onClose={() => setSelectedCollection(null)}
          onCopyPrompt={() => showToast('Prompt copiado!', 'success')}
        />
      )}

      {toast && <Toast message={toast.message} type={toast.type} onDismiss={() => setToast(null)} />}
    </>
  );
};

interface FilterButtonProps {
    label: string;
    count: number;
    active: boolean;
    onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, count, active, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
        active
          ? 'bg-cyan-500 text-slate-900'
          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
      }`}
    >
      <span>{label}</span>
      <span className={`px-2 py-0.5 rounded-full text-xs ${active ? 'bg-slate-800/50 text-white' : 'bg-slate-700 text-slate-200'}`}>{count}</span>
    </button>
);


export default PromptLibrary;
