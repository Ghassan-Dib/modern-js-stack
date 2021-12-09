module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "import/prefer-default-export": "off"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "extends": ["plugin:jest/recommended"],
    "plugins": ["jest"]
    
}
