import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        node: true,
        es2021: true,
        jest: true, // ✅ so describe, it, expect don’t throw errors
      },
    },
    rules: {
      // You can add custom ESLint rules here
    },
  },
];
