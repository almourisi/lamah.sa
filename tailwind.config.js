/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}


module.exports = {

  plugins: [
      require('flowbite/plugin')
  ]

}


module.exports = {

  content: [
      "./node_modules/flowbite/**/*.js"
  ]

}


module.exports = { 
  content: ["./*.html", "./ecommerce/*.html", "./assets/**/*.js"],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],
  
};

// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    }
  }
}