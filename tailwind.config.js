module.exports = {
    purge: {
      content: [
        './src/**/*.{js,jsx}',
        './index.html'
      ],
    },
    darkMode: false,
    theme: {
      colors: {
        highlight: '#143109',
        primary: '#AAAE7F',
        secondary: '#D0D6B3',
        white: '#F7F7F7',
        light: '#EAECEA',
        dark: '#444a44',
      },
      fontFamily: {
        sans: ['Dosis', 'sans-serif'],
        serif: ['Kreon', 'serif'],
      },
      extend: {
        height: {
          header: '20vh',
          content: '60vh',
          footer: '20vh',
        },
      },
    },
    // prefix: like screen sizes md: or mouse actions hover:
    variants: {
      extend: {},
    },
    plugins: [],
  }
  