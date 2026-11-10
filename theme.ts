export const theme = {
  // Backgrounds, very dark blues (darkest to lightest)
  base: '#030d1c', // deep navy blue, main scene background
  surface0: '#06142a', // cards, panels, terminal body
  surface1: '#0a1d3b', // raised cards, hover, table rows
  surface2: '#0f2850', // lightest surface: borders, dividers, inactive strokes
 
  // Text (cool blue-tinted, no purple)
  overlay0: '#3f5a8c', // faint hints, disabled
  overlay1: '#6f8ab8', // captions, line numbers
  subtext: '#a8bde0', // secondary text
  text: '#e6eefb', // main text (soft ice white)
 
  // Pastel accents
  rose: '#f5b5cf', // pink, playful highlights
  coral: '#f4a0ae', // soft red
  peach: '#f9c6a5', // warm orange
  butter: '#f7e5a8', // pastel yellow
  mint: '#a9e8c6', // soft green
  teal: '#9ce3dc', // aqua
  sky: '#a3d8f4', // light blue
  periwinkle: '#aab6f7', // blue-violet
  lavender: '#c8b0f4', // purple
  orchid: '#e4aaee', // magenta-purple
} as const;


export const MONO = '"JetBrains Mono", ui-monospace, Menlo, monospace';

export default theme;
