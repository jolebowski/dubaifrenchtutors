module.exports = {
  '.js, .jsx, .ts, .tsx': {
    style: 'eslint', // Utilisez le style eslint pour trier les imports
    parser: {
      typescript: ['.ts', '.tsx'],
      javascript: ['.js', '.jsx'],
    },
  },
};
