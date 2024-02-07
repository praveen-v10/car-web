/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      primary:'Open Sans',
      secondary:'Lato',
      PS:['Parisienne'],
    },
    container:{
      padding:{
        DEFAULT:'1rem',
        lg:'0',
      }
    },
    extend: {
      colors:{
        primary:'#212353',
        secondary:'#4B5D68',
        accent:{
          primary:'#9C69E2',
          primary_hover:'#9059DB',
          secondary:'#F063B8',
          secondary_hover:'#E350A9',
          tertiary:'#68C9BA',
        }
      }
    },
  },
  plugins: [require("daisyui")],
};
