// @ts-check
import { defineConfig, fontProviders} from 'astro/config';

// https://astro.build/config
export default defineConfig({
   site: 'https://blog.mdjaya.dev',
    fonts: [
  {
    provider: fontProviders.local(),
    name: "bauhaus-abstract",
    cssVariable: "--font-bauhaus-abstract",
    options: {
      variants: [{
        src: ['./src/assets/fonts/Bauhaus-Abstract.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  },
  {
    provider: fontProviders.local(),
    name: "bauhaus",
    cssVariable: "--font-bauhaus",
    options: {
      variants: [{
        src: ['./src/assets/fonts/Bauhaus.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  },
  {
    provider: fontProviders.local(),
    name: "dcc-ash",
    cssVariable: "--font-dcc-ash",
    options: {
      variants: [{
        src: ['./src/assets/fonts/DCC - Ash.otf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  },
  {
    provider: fontProviders.local(),
    name: "product-design",
    cssVariable: "--font-product-design",
    options: {
      variants: [{
        src: ['./src/assets/fonts/ProductDesign.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  },
  {
    provider: fontProviders.local(),
    name: "trayan",
    cssVariable: "--font-trayan",
    options: {
      variants: [{
        src: ['./src/assets/fonts/Trayan.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }
]
});
