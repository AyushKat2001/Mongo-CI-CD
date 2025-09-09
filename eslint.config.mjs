import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs", // ✅ you’re using require/module.exports
      globals: {
        ...globals.node,   // ✅ adds require, module, process, console
        ...globals.jest,   // ✅ adds describe, it, expect, beforeAll, afterAll
      },
    },
    rules: {
      // add custom rules if needed
    },
  },
];
