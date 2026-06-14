export default defineAppConfig({
  ui: {
    header: {
      slots: {
        root: 'bg-transparent border-b border-transparent data-[scrolled]:bg-[var(--bp-bg)] data-[scrolled]:border-[var(--bp-border)] transition-[background,border-color] duration-200',
        container: 'max-w-280'
      }
    },
    footer: {
      slots: {
        root: 'bg-[var(--bp-bg-dark)] text-[var(--bp-text-on-dark)]',
        container: 'max-w-280 border-t border-white/[0.06] py-12'
      }
    },
    button: {
      slots: {
        base: 'font-medium transition-all duration-150 !rounded-none'
      },
      variants: {
        size: {
          md: { base: 'px-5 py-2.5' },
          lg: { base: 'px-7 py-3.5' }
        },
        variant: {
          ghost: {
            base: '!bg-transparent text-(--bp-text-secondary) hover:text-[var(--bp-text)] focus-visible:outline focus-visible:outline-[var(--bp-accent)] focus-visible:outline-offset-2',
          }
        }
      }
    },
    card: {
      slots: {
        root: 'bg-transparent border border-dashed border-[var(--bp-border)] rounded-xs',
        body: 'p-7'
      }
    },
    accordion: {
      slots: {
        root: 'max-w-[720px]',
        trigger: 'py-5 cursor-pointer',
        label: 'font-semibold text-base font-heading',
        content: 'text-[15px] leading-relaxed text-(--bp-text-secondary) pb-5'
      }
    },
    badge: {
    },
    pageSection: {
      slots: {
        root: 'py-16 sm:py-24',
        container: 'max-w-280',
        headline: 'bp-label mb-3',
        title: 'font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.15] font-heading',
        description: 'text-lg leading-relaxed text-(--bp-text-secondary) max-w-145'
      }
    },
    pageHero: {
      slots: {
        root: 'min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center py-10',
        container: 'max-w-[760px] relative z-10',
        title: 'font-bold text-[clamp(42px,6vw,80px)] leading-[1.04] font-heading',
        description: 'text-lg leading-relaxed text-(--bp-text-secondary) max-w-[540px] mx-auto',
        links: 'gap-4 justify-center'
      }
    },
    pageCTA: {
      slots: {
        root: 'py-16 sm:py-24 bg-[var(--bp-bg-dark)] text-[var(--bp-text-on-dark)]',
        container: 'max-w-[600px] text-center',
        title: 'font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.15] font-heading text-[var(--bp-text-on-dark)]',
        description: 'text-lg leading-relaxed text-[var(--bp-text-on-dark)]/60',
        links: 'gap-4 justify-center'
      }
    }
  }
})
