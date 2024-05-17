/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@repo/eslint-config/index.js",
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue'],
};
