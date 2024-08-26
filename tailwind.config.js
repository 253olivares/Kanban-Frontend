/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ['Ubuntu', 'sans-serif']
      },
      screens: {
        'mobile':'400px',
        // => @media (min-width: 400px) { ... }

        'sMobile': '640px',
        // => @media (min-width: 640px) { ... }

        // disabled for now for testing ui
        // 'mMobile': '768px',
        // => @media (min-width: 768px) { ... }

        'sLaptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'mLaptop': '1280px',
        // => @media (min-width: 1280px) { ... }

        'desktop': '1536px',
        // => @media (min-width: 1536px) { ... }

        'largeDesktop': '1830px',
        // => @media (min-width: 1830px) { ... }

        '4k': '2560px'
      },
      colors: {
        "PrimaryWhite" : "var(--rPrimaryWhite)",
        "ThemeRed": 'var(--rThemeRed)',
        "ThemeOrange" : 'var(--rThemeRed)',
        "ThemePurple": "var(--rThemePurple)",
        "ThemeDarkBlue": 'var(--rThemeDarkBlue)' ,
        "ThemeBlue": "var(--rThemeBlue)",
        "Slate-gray": 'var(--rSlateGray)',
        "SpaceBlue": "var(--rSpaceBlue)",
        "SpaceBlueSelected": "var(--rSpaceBlueSelected)",
        "SelectorBlue" : "var(--rSelectorBlue)",
        "SelectorBlue50": "var(--rSelectorBlue50)",
        "GlassBackground": "var(--rGlassBackground)"
      }
    },
  },
  plugins: [],
}