const tailwindcss = require('tailwindcss');
const autoprefixer=require('autoprefixer');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        autoprefixer({ Browserslist: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']})
        
    ],
};