import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'questlists': ['Questlists-Icons', 'sans-serif'],
      },
      colors: {
        // Primary color with variations
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49'
        },
        // Secondary/accent color
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e'
        },
        // Neutral colors for text and backgrounds
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a'
        },
        // Semantic colors
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16'
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03'
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a'
        },
        // Light mode specific colors
        light: {
          surface: {
            50: '#ffffff',    // Brightest surface
            100: '#fafafa',   // Base surface
            200: '#f5f5f5',   // Darker surface
            300: '#e5e5e5'    // Darkest surface
          },
          text: {
            50: '#171717',    // Primary text
            100: '#404040',   // Secondary text
            200: '#737373'    // Tertiary text
          },
          border: {
            50: '#e5e5e5',    // Subtle border
            100: '#d4d4d4',   // Default border
            200: '#a3a3a3'    // Emphasized border
          }
        },
        // Dark theme specific colors
        dark: {
          surface: {
            50: '#18181b',    // Lightest surface
            100: '#1f1f23',   // Base surface
            200: '#27272a',   // Darker surface
            300: '#303035'    // Darkest surface
          },
          text: {
            50: '#ffffff',    // Primary text
            100: '#d4d4d8',   // Secondary text
            200: '#a1a1aa'    // Tertiary text
          },
          border: {
            50: '#27272a',    // Subtle border
            100: '#3f3f46',   // Default border
            200: '#52525b'    // Emphasized border
          }
        }
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.10)',
      }
    }
  },
  plugins: [typography, forms, aspectRatio, containerQueries]
} satisfies Config;
