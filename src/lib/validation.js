import { z } from 'zod';

// Project validation schema
export const projectSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  desc: z.string().min(1, 'Description is required').max(500),
  fullDescription: z.string().optional(),
  features: z.array(z.string()).optional(),
  challenges: z.array(z.string()).optional(),
  results: z.string().optional(),
  img: z.string().url('Invalid image URL').optional().or(z.literal('')),
  images: z.array(z.string().url()).optional(),
  tag: z.string().min(1, 'Tag is required'),
  tech: z.array(z.string()).min(1, 'At least one technology is required'),
  links: z.array(z.object({
    url: z.string().url(),
    label: z.string().optional()
  })).optional(),
  showOnHome: z.boolean().optional()
});

// Login validation schema
export const loginSchema = z.object({
  password: z.string().min(1, 'Password is required')
});
