import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CourseContent from './components/CourseContent';
import CourseSelection from './components/CourseSelection';
import PromptLibrary from './components/PromptLibrary';
import { courses as courseData } from './data/courses';
import type { Course, Module, Lesson } from './types';

type View = 'courses' | 'promptLibrary';

const App: React.FC = () => {
  const [courses] = useState<Course[]>(courseData);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<View>('courses');

  const handleSelectLesson = (courseId: string, moduleId: string, lessonId: string) => {
    if (courseId !== selectedCourseId) {
      handleSelectCourse(courseId);
    }
    setSelectedModuleId(moduleId);
    setSelectedLessonId(lessonId);
  };
  
  const handleSelectCourse = (courseId: string) => {
    if (courseId === 'course-4') {
      handleShowPromptLibrary();
      return;
    }

    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    setSelectedCourseId(courseId);
    
    const firstModule = course.modules[0];
    const firstLesson = firstModule?.lessons[0];

    setSelectedModuleId(firstModule?.id || null);
    setSelectedLessonId(firstLesson?.id || null);
  };
  
  const handleReturnToCourses = () => {
    setCurrentView('courses');
    setSelectedCourseId(null);
    setSelectedModuleId(null);
    setSelectedLessonId(null);
  };

  const handleShowPromptLibrary = () => {
    setCurrentView('promptLibrary');
  };

  const selectedLesson = useMemo(() => {
    if (!selectedCourseId || !selectedModuleId || !selectedLessonId) {
      return null;
    }
    const course = courses.find(c => c.id === selectedCourseId);
    const module = course?.modules.find(m => m.id === selectedModuleId);
    return module?.lessons.find(l => l.id === selectedLessonId) || null;
  }, [courses, selectedCourseId, selectedModuleId, selectedLessonId]);

  const showSidebar = currentView === 'courses' && !!selectedCourseId;
  const showBackButton = currentView === 'promptLibrary' || !!selectedCourseId;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <div className="flex h-screen">
        {showSidebar && (
            <Sidebar 
              courses={courses.filter(course => course.id !== 'course-4')}
              selectedCourseId={selectedCourseId}
              selectedModuleId={selectedModuleId}
              selectedLessonId={selectedLessonId}
              onSelectLesson={handleSelectLesson}
              onSelectCourse={handleSelectCourse}
            />
        )}
        <main className="flex-1 overflow-y-auto relative">
          <Header 
            showBackButton={showBackButton}
            onReturnToCourses={handleReturnToCourses}
          />
          {currentView === 'courses' ? (
            !selectedCourseId ? (
              <CourseSelection courses={courses} onSelectCourse={handleSelectCourse} />
            ) : (
              <div className="pt-16">
                <CourseContent lesson={selectedLesson} />
              </div>
            )
          ) : (
            <PromptLibrary />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;