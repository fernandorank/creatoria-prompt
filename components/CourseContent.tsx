import React from 'react';
import type { Lesson } from '../types';
import { BrainCircuitIcon } from './icons/BrainCircuitIcon';

interface CourseContentProps {
  lesson: Lesson | null;
}

const CourseContent: React.FC<CourseContentProps> = ({ lesson }) => {
  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center text-slate-500 p-6 lg:p-10">
        <BrainCircuitIcon className="w-24 h-24 mb-4 text-slate-700" />
        <h2 className="text-2xl font-bold text-slate-400">Welcome to AI Course Nexus</h2>
        <p className="mt-2 max-w-md">Select a lesson from the sidebar to begin your journey into the world of Artificial Intelligence.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 lg:p-10">
      <div className="mb-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-100 tracking-tight">{lesson.title}</h1>
        <p className="text-slate-400 mt-1">Duration: {lesson.duration}</p>
      </div>

      <div className="aspect-video bg-slate-800/50 rounded-lg shadow-2xl shadow-cyan-500/5 border border-slate-700 overflow-hidden mb-8">
        {/* In a real app, this would be a video player component */}
        <div className="w-full h-full flex items-center justify-center">
            <iframe 
                className="w-full h-full"
                src={lesson.videoUrl}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-200 border-b border-slate-700 pb-2 mb-4">Lesson Details</h2>
        <div className="prose prose-invert prose-lg max-w-none text-slate-300">
          <p>{lesson.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;