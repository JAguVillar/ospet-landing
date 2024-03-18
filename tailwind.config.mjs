/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Este es el color dominante utilizado a lo largo del diseño del sitio web. A menudo se utiliza para elementos clave como encabezados, fondos o botones principales. El color primario establece el tono general y el estado de ánimo del sitio web. Es esencial elegir un color primario que refleje la identidad de la marca y que resuene con el propósito del sitio web.
        "ospet-primary": "#fff",
        //boton
        "ospet-button": "#f582ae",
        // Los colores secundarios complementan al color primario y se utilizan para agregar profundidad y variedad al diseño. Estos colores suelen aplicarse a elementos como botones secundarios, bordes u otros acentos de diseño. Los colores secundarios ayudan a crear jerarquía visual y equilibrio dentro del diseño. Deben armonizar bien con el color primario al tiempo que ofrecen suficiente contraste para que los elementos clave destaquen.
        "ospet-secondary": "#8bd3dd",
        //Los colores de acento se utilizan de manera limitada para llamar la atención sobre elementos específicos o llamados a la acción dentro del diseño. Estos colores suelen ser más brillantes o vibrantes que los colores primarios y secundarios, lo que los hace destacar prominentemente. Los colores de acento pueden aplicarse a elementos como enlaces, texto destacado o botones importantes para crear énfasis y guiar la interacción del usuario.
        "ospet-accent": "#f582ae",
        "ospet-text": "#001858",
        "ospet-paragraph": "#172c66",
        "ospet-main": "#f3d2c1",
      },
    },
  },
  plugins: [],
};
