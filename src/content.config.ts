import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
                                                       
const blog = defineCollection({
        // Load Markdown and MDX files in the `src/content/blog/` directory.
        loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
        // Type-check frontmatter using a schema
        schema: ({ image }) =>
                z.object({
                        title: z.string(),
                        description: z.string(),
                        // Transform string to Date object
                        pubDate: z.coerce.date(),
                        updatedDate: z.string().optional(),
                        /*heroImage: z.optional(image()),*/
                }),    
});

const sotw = defineCollection({
        // Load Markdown and MDX files in the `src/content/other/sotw/` directory.
        loader: glob({ base: './src/content/other/sotw', pattern: '**/*.{md,mdx}' }),
        // Type-check frontmatter using a schema
        schema: ({ image }) =>
                z.object({
                        title: z.string(),
                        artist: z.string(),
			link: z.string(),
			releaseDate: z.string(),
                        pubDate: z.coerce.date(),
                        updatedDate: z.string().optional(),
                        coverArt: z.optional(image()),
                }),    
});

const qotw = defineCollection({
        // Load Markdown and MDX files in the `src/content/other/qotw/` directory.
        loader: glob({ base: './src/content/other/qotw', pattern: '**/*.{md,mdx}' }),
        // Type-check frontmatter using a schema
        schema: ({ image }) =>
                z.object({
                        quote: z.string(),
                        author: z.string(),
			releaseDate: z.string(),
                        pubDate: z.coerce.date(),
                        updatedDate: z.string().optional(),
                }),    
});

                                
export const collections = {blog, sotw, qotw};
