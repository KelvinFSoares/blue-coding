module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  darkMode: 'class',
  mode: 'jit',
  important: true, // important in prod is must be
  theme: {
    extend: {
      spacing: {
        110: '28rem',
        124: '32rem',
        138: '36rem',
        152: '44rem',
      },
    },
  },
  plugins: [],
};
