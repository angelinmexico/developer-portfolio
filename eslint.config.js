import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  js.configs.recommended,
  { files: ['**/*.{js,jsx}'], languageOptions: { globals: globals.browser } },
  react.configs.recommended,
  reactHooks.configs.recommended,
  { ignores: ['dist'] },
]
