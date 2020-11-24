module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: 0,
    semi: 0,
    "eol-last": 0,
    "comma-dangle": 0,
    "space-before-function-paren": 0,
    "arrow-parens": 0,
    "max-len": 0
  }
};
