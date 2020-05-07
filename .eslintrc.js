module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
      parser: "babel-eslint"
    },
    rules: {
      "no-console":  "off",
      "vue/no-unused-vars" : "off",
      // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",    
      // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "prettier/prettier": [
        "error",
        // "off",
        {
          singleQuote: true,
          semi: true,
          useTabs: true,
          tabWidth: 2,
          trailingComma: "all",
          printWidth: 120,
          bracketSpacing: true,
          arrowParens: "avoid"
        }
      ]
    },
  };
  