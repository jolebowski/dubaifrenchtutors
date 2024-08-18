module.exports = {
  extends: ['next'],
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.tsx'], // Spécifiez les types de fichiers auxquels cette configuration s'applique
      extends: ['next/core-web-vitals'], // Ajoutez l'extension supplémentaire
    },
  ],
};
