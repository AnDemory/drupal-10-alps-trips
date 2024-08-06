import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/postcss.config.js", "build/*.js"],
}, ...compat.extends("airbnb-base", "plugin:prettier/recommended", "plugin:yml/recommended"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            Drupal: true,
            drupalSettings: true,
            drupalTranslations: true,
            jQuery: true,
            _: true,
            Cookies: true,
            Backbone: true,
            Modernizr: true,
            loadjs: true,
            Shepherd: true,
            Sortable: true,
            once: true,
            CKEditor5: true,
            tabbable: true,
        },
    },

    rules: {
        "prettier/prettier": "error",
        "consistent-return": ["off"],
        "no-underscore-dangle": ["off"],
        "max-nested-callbacks": ["warn", 3],
        "import/no-mutable-exports": ["warn"],

        "no-plusplus": ["warn", {
            allowForLoopAfterthoughts: true,
        }],

        "no-param-reassign": ["off"],
        "no-prototype-builtins": ["off"],

        "valid-jsdoc": ["warn", {
            prefer: {
                returns: "return",
                property: "prop",
            },

            requireReturn: false,
        }],

        "no-unused-vars": ["warn"],

        "operator-linebreak": ["error", "after", {
            overrides: {
                "?": "ignore",
                ":": "ignore",
            },
        }],

        "yml/indent": ["error", 2],
    },
}];