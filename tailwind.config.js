/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* gray-200 */
        input: 'var(--color-input)', /* white */
        ring: 'var(--color-ring)', /* Deep space foundation */
        background: 'var(--color-background)', /* gray-50 */
        foreground: 'var(--color-foreground)', /* gray-800 */
        primary: {
          DEFAULT: 'var(--color-primary)', /* Deep space foundation */
          foreground: 'var(--color-primary-foreground)' /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* Supporting depth */
          foreground: 'var(--color-secondary-foreground)' /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-500 */
          foreground: 'var(--color-destructive-foreground)' /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* Subtle elevation */
          foreground: 'var(--color-muted-foreground)' /* gray-500 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* Austin warmth */
          foreground: 'var(--color-accent-foreground)' /* white */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)' /* gray-800 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* white */
          foreground: 'var(--color-card-foreground)' /* gray-800 */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* emerald-500 */
          foreground: 'var(--color-success-foreground)' /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-500 */
          foreground: 'var(--color-warning-foreground)' /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-500 */
          foreground: 'var(--color-error-foreground)' /* white */
        },
        cosmic: {
          primary: 'var(--color-cosmic-primary)', /* Deep cosmic purple */
          secondary: 'var(--color-cosmic-secondary)', /* Austin sunset orange */
          accent: 'var(--color-cosmic-accent)', /* Electric cyan */
          trust: 'var(--color-cosmic-trust)', /* Calming teal */
          background: 'var(--color-cosmic-background)', /* Rich space black */
          'text-primary': 'var(--color-cosmic-text-primary)', /* Pure white */
          'text-secondary': 'var(--color-cosmic-text-secondary)', /* Warm gray */
          cta: 'var(--color-cosmic-cta)' /* Energetic coral-red */
        }
      },
      fontFamily: {
        'sans': ['Source Sans Pro', 'sans-serif'],
        'heading': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], /* 48px */
        'display': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], /* 36px */
        'title': ['1.5rem', { lineHeight: '1.3' }], /* 24px */
        'body': ['1rem', { lineHeight: '1.6' }], /* 16px */
        'caption': ['0.875rem', { lineHeight: '1.4' }] /* 14px */
      },
      spacing: {
        'xs': 'var(--spacing-xs)', /* 8px */
        'sm': 'var(--spacing-sm)', /* 13px */
        'md': 'var(--spacing-md)', /* 21px */
        'lg': 'var(--spacing-lg)', /* 34px */
        'xl': 'var(--spacing-xl)' /* 55px */
      },
      boxShadow: {
        'subtle': 'var(--shadow-subtle)',
        'soft': 'var(--shadow-soft)',
        'layered': 'var(--shadow-layered)',
        'cosmic': '0 0 20px rgba(0, 217, 255, 0.3)'
      },
      borderRadius: {
        'cosmic': 'var(--radius)' /* 8px */
      },
      animation: {
        'particle-float': 'particleFloat 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'cosmic-rotate': 'cosmicRotate 12s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards'
      },
      keyframes: {
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' }
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 5px currentColor' },
          '100%': { boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' }
        },
        cosmicRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      backdropBlur: {
        'cosmic': '20px'
      },
      transitionTimingFunction: {
        'organic': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ],
}