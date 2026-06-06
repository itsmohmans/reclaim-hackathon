import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const linkSchema = z.object({
  label: z.string(),
  to: z.string(),
  color: z.string().optional(),
  variant: z.string().optional(),
  size: z.string().optional(),
  target: z.string().optional()
})

const homepageSchema = z.object({
  locale: z.string(),
  dir: z.enum(['ltr', 'rtl']).optional(),

  seo: z.object({
    title: z.string(),
    description: z.string()
  }),

  nav: z.object({
    brand: z.string(),
    links: z.array(z.object({ label: z.string(), to: z.string() })),
    cta: z.object({ label: z.string(), to: z.string() })
  }),

  hero: z.object({
    tag: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    primaryCta: linkSchema,
    secondaryCta: linkSchema
  }),

  about: z.object({
    tag: z.string(),
    title: z.string(),
    description: z.string(),
    pillars: z.array(z.object({
      title: z.string(),
      description: z.string()
    })),
    challenge: z.object({
      title: z.string(),
      paragraphs: z.array(z.string())
    })
  }),

  tracks: z.object({
    tag: z.string(),
    title: z.string(),
    description: z.string(),
    items: z.array(z.object({
      num: z.string(),
      title: z.string(),
      description: z.string()
    }))
  }),

  howItWorks: z.object({
    tag: z.string(),
    title: z.string(),
    steps: z.array(z.object({
      num: z.string(),
      title: z.string(),
      description: z.string()
    }))
  }),

  resources: z.object({
    tag: z.string(),
    title: z.string(),
    description: z.string(),
    items: z.array(z.object({
      name: z.string(),
      description: z.string()
    }))
  }),

  timeline: z.object({
    tag: z.string(),
    title: z.string(),
    events: z.array(z.object({
      date: z.string(),
      title: z.string(),
      description: z.string()
    }))
  }),

  criteria: z.object({
    tag: z.string(),
    title: z.string(),
    items: z.array(z.object({
      title: z.string(),
      description: z.string()
    }))
  }),

  community: z.object({
    tag: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string())
  }),

  prizes: z.object({
    tag: z.string(),
    title: z.string(),
    description: z.string(),
    items: z.array(z.object({
      place: z.string(),
      label: z.string(),
      amount: z.string(),
      featured: z.boolean().optional()
    }))
  }),

  faq: z.object({
    tag: z.string(),
    title: z.string(),
    items: z.array(z.object({
      question: z.string(),
      answer: z.string()
    }))
  }),

  cta: z.object({
    title: z.string(),
    description: z.string(),
    primaryCta: linkSchema,
    secondaryCta: linkSchema
  }),

  footer: z.object({
    brand: z.string(),
    tagline: z.string(),
    eventLinks: z.array(z.object({ label: z.string(), to: z.string() })),
    connectLinks: z.array(z.object({ label: z.string(), to: z.string() })),
    copyright: z.string()
  })
})

export default defineContentConfig({
  collections: {
    homepage_en: defineCollection({
      type: 'page',
      source: { include: 'en/**', prefix: '' },
      schema: homepageSchema
    }),
    homepage_ar: defineCollection({
      type: 'page',
      source: { include: 'ar/**', prefix: '' },
      schema: homepageSchema
    })
  }
})
