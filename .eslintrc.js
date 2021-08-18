module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "commonjs": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["react"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-console": "off",
    "import/extensions": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "typescript": {},
      "babel-module": {
        "root": ["./"],
        "alias": {
          "@components": "./src/components/*"
        }
      },
      "node": {
        "extensions": [".ts", ".tsx"]
      }
    }
  }
}
