# eslint-plugin-cursor

An ESLint plugin to detect garbled characters (�).

This plugin automatically detects garbled characters in source code and warns developers, enabling early detection of character encoding issues.

## Features

- Detection of U+FFFD (REPLACEMENT CHARACTER)
- Precise identification of garbled character locations
- Full support for Japanese source code

## Installation

```bash
npm install --save-dev eslint-plugin-cursor
```

## Usage

Add the following to your `.eslintrc`:
```json
{
  "plugins": ["cursor"],
  "extends": ["plugin:cursor/recommended"]
}
```
