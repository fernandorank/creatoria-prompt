import React from 'react';
import type { Course } from '../types';
import Banner from './Banner';

interface CourseSelectionProps {
  courses: Course[];
  onSelectCourse: (courseId: string) => void;
}

const CourseSelection: React.FC<CourseSelectionProps> = ({ courses, onSelectCourse }) => {
  return (
    <>
      <Banner />
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-10 pb-6 lg:pb-10 mt-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-200 tracking-tight">Nossos Cursos</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => onSelectCourse(course.id)}
              className="group relative block w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg border border-slate-700/50
                       hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500"
              aria-label={`Start course: ${course.title}`}
            >
              <img 
                src={course.thumbnail} 
                alt={`${course.title} thumbnail`} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-4">
                <h2 className="text-lg font-bold text-slate-100">{course.title}</h2>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseSelection;