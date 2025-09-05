
export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  content: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  modules: Module[];
}

// New types for the Prompt Library V2
export type PromptCollectionType = 'image' | 'video';

export interface PromptVariation {
  id: string;
  prompt: string;
  mediaUrl: string; // URL for the generated image or video
}

export interface PromptCollection {
  id: string;
  title: string;
  type: PromptCollectionType;
  thumbnailUrl: string;
  variations: PromptVariation[];
}
