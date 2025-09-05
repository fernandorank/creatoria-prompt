
import type { PromptCollection } from '../types';

export const promptCollections: PromptCollection[] = [
  {
    id: 'collection-1',
    title: 'Guerreiros Cibernéticos',
    type: 'image',
    thumbnailUrl: 'https://i.imgur.com/8Q5tV5m.png',
    variations: [
      {
        id: 'var-1-1',
        prompt: 'A cinematic portrait of a cybernetic warrior, intricate glowing blue circuits on their face, dark background, high detail, photorealistic, 8k.',
        mediaUrl: 'https://i.imgur.com/8Q5tV5m.png',
      },
      {
        id: 'var-1-2',
        prompt: 'Full body shot of a cybernetic warrior in a neon-lit alley, rain reflecting the lights, dynamic pose, blade runner style, ultra realistic.',
        mediaUrl: 'https://i.imgur.com/pDRgYxT.png',
      },
      {
        id: 'var-1-3',
        prompt: 'Close-up on the glowing red eye of a cybernetic warrior, metallic textures, shallow depth of field, menacing look, detailed mechanics.',
        mediaUrl: 'https://i.imgur.com/BXRp5n6.png',
      },
    ],
  },
  {
    id: 'collection-2',
    title: 'Cachoeira em Slow Motion',
    type: 'video',
    thumbnailUrl: 'https://i.imgur.com/V73D35d.mp4',
    variations: [
      {
        id: 'var-2-1',
        prompt: 'Drone shot of a majestic waterfall in a lush jungle, water flowing in slow motion, mist rising, cinematic, 4k.',
        mediaUrl: 'https://i.imgur.com/V73D35d.mp4',
      },
      {
        id: 'var-2-2',
        prompt: 'Close-up shot of water cascading over rocks in slow motion, sunbeams filtering through the trees, peaceful and serene.',
        mediaUrl: 'https://i.imgur.com/V73D35d.mp4',
      },
    ],
  },
  {
    id: 'collection-3',
    title: 'Animais Fantásticos',
    type: 'image',
    thumbnailUrl: 'https://i.imgur.com/s6geV0o.png',
    variations: [
      {
        id: 'var-3-1',
        prompt: 'A majestic griffin with golden feathers, perched on a mountain peak at sunrise, fantasy art, digital painting, epic lighting.',
        mediaUrl: 'https://i.imgur.com/s6geV0o.png',
      },
      {
        id: 'var-3-2',
        prompt: 'A bioluminescent fox in an enchanted forest at night, glowing mushrooms and plants around it, ethereal, highly detailed.',
        mediaUrl: 'https://i.imgur.com/a9PSHJR.png',
      },
      {
        id: 'var-3-3',
        prompt: 'A clockwork owl, intricate gears and copper plating, steampunk style, sitting on a vintage book, warm lighting.',
        mediaUrl: 'https://i.imgur.com/9iLpgWN.png',
      },
       {
        id: 'var-3-4',
        prompt: 'A crystal turtle with a shell made of shimmering amethyst, swimming in a clear blue ocean, underwater photography style.',
        mediaUrl: 'https://i.imgur.com/4x0hJ48.png',
      },
    ],
  },
  {
    id: 'collection-4',
    title: 'Carros em Alta Velocidade',
    type: 'video',
    thumbnailUrl: 'https://i.imgur.com/e2a25a9.mp4',
    variations: [
      {
        id: 'var-4-1',
        prompt: 'A sports car drifting around a sharp corner on a mountain road at night, motion blur, taillights leaving trails, high-octane.',
        mediaUrl: 'https://i.imgur.com/e2a25a9.mp4',
      },
    ],
  },
   {
    id: 'collection-5',
    title: 'Paisagens Urbanas Noturnas',
    type: 'image',
    thumbnailUrl: 'https://i.imgur.com/Sxo2k5R.png',
    variations: [
      {
        id: 'var-5-1',
        prompt: 'A cyberpunk city street at night, towering holographic billboards, flying vehicles, rain-slicked streets reflecting neon lights, detailed, immersive.',
        mediaUrl: 'https://i.imgur.com/Sxo2k5R.png',
      },
      {
        id: 'var-5-2',
        prompt: 'Rooftop view of a sprawling metropolis at night, long exposure, light trails from traffic, clear sky with stars, photo.',
        mediaUrl: 'https://i.imgur.com/JpGkZXK.png',
      },
    ],
  },
   {
    id: 'collection-6',
    title: 'Explosão de Cores',
    type: 'video',
    thumbnailUrl: 'https://i.imgur.com/I7V4pTu.mp4',
    variations: [
      {
        id: 'var-6-1',
        prompt: 'Extreme close-up of colored powder exploding in slow motion against a black background, vibrant and dynamic, high speed camera.',
        mediaUrl: 'https://i.imgur.com/I7V4pTu.mp4',
      },
    ],
  },
];
