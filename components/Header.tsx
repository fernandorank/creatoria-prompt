import React from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface HeaderProps {
  showBackButton: boolean;
  onReturnToCourses: () => void;
}

const Header: React.FC<HeaderProps> = ({ showBackButton, onReturnToCourses }) => {
  return (
    <header className="flex items-center h-16 px-6 absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/60 to-transparent">
      <div className="flex items-center">
        <button onClick={onReturnToCourses} aria-label="Go to homepage">
          <img 
            src="https://fernandorank.com/wp-content/uploads/2025/09/logo-v3.png" 
            alt="AI Course Nexus Logo"
            className="h-10 w-auto"
          />
        </button>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        {showBackButton && (
          <button 
            onClick={onReturnToCourses}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 text-slate-300 bg-slate-800/50 hover:bg-slate-700/80"
            aria-label="Voltar para a seleção de cursos"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Voltar</span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;