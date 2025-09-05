
import React, { useState } from 'react';
import type { Course } from '../types';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { VideoIcon } from './icons/VideoIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';

interface SidebarProps {
  courses: Course[];
  selectedCourseId: string | null;
  selectedModuleId: string | null;
  selectedLessonId: string | null;
  onSelectLesson: (courseId: string, moduleId: string, lessonId: string) => void;
  onSelectCourse: (courseId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  courses, 
  selectedCourseId, 
  selectedModuleId, 
  selectedLessonId, 
  onSelectLesson,
  onSelectCourse
}) => {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>(
    courses.reduce((acc, course) => {
        if(course.id === selectedCourseId) {
            course.modules.forEach(module => {
                acc[module.id] = true;
            });
        }
        return acc;
    }, {} as Record<string, boolean>)
  );

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev => ({ ...prev, [moduleId]: !prev[moduleId] }));
  };

  const handleCourseSelection = (courseId: string) => {
      onSelectCourse(courseId);
      // Automatically open the first module of the newly selected course
      const course = courses.find(c => c.id === courseId);
      if (course && course.modules.length > 0) {
          setOpenModules(prev => ({...prev, [course.modules[0].id]: true}));
      }
  }

  return (
    <aside className="w-80 h-full bg-slate-900/80 border-r border-slate-700/50 overflow-y-auto shrink-0 hidden md:block">
      <nav className="p-4">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Courses</h2>
        <ul className="space-y-4">
          {courses.map(course => (
            <li key={course.id}>
              <h3 
                className="text-lg font-bold text-slate-200 cursor-pointer hover:text-cyan-400 transition-colors"
                onClick={() => handleCourseSelection(course.id)}
              >
                {course.title}
              </h3>
              {selectedCourseId === course.id && (
                 <ul className="mt-2 pl-2 border-l-2 border-slate-700 space-y-1">
                 {course.modules.map(module => (
                   <li key={module.id}>
                     <button
                       onClick={() => toggleModule(module.id)}
                       className="w-full flex justify-between items-center text-left p-2 rounded-md hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                     >
                       <span className="flex items-center gap-2">
                         <BookOpenIcon className="w-5 h-5 text-slate-500"/>
                         <span className="font-semibold text-slate-300">{module.title}</span>
                       </span>
                       <ChevronDownIcon 
                         className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${openModules[module.id] ? 'rotate-180' : ''}`}
                       />
                     </button>
                     {openModules[module.id] && (
                       <ul className="pl-4 mt-1 space-y-1 border-l border-slate-700 ml-2">
                         {module.lessons.map(lesson => {
                           const isSelected = lesson.id === selectedLessonId && module.id === selectedModuleId;
                           return (
                             <li key={lesson.id}>
                               <button
                                 onClick={() => onSelectLesson(course.id, module.id, lesson.id)}
                                 className={`w-full text-left p-2 rounded-md flex items-center gap-3 transition-colors ${
                                   isSelected 
                                   ? 'bg-cyan-500/10 text-cyan-400' 
                                   : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                                 }`}
                               >
                                <VideoIcon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}/>
                                 <span>{lesson.title}</span>
                               </button>
                             </li>
                           );
                         })}
                       </ul>
                     )}
                   </li>
                 ))}
               </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
