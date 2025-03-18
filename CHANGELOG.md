# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2025-03-18

### Changed
- **Major Dependency Updates**:
  - Replaced `lit-element` and `lit-html` with the unified `lit` package (v3.1.0)
  - Updated `@lostinbrittany/jsqrcode` from v2.0.0 to v3.0.0
  - Replaced `es-dev-server` with `@web/dev-server` for local development

### Updated
- **Code Modernization**:
  - Updated import statements in component files to use the new Lit package
  - Modified demo file to use the new Lit import syntax
  - Updated npm scripts to use `web-dev-server` instead of `es-dev-server`

### Development Dependencies
- Updated development dependencies to their latest compatible versions:
  - `@open-wc/eslint-config`: ^2.1.0 → ^9.2.2
  - `@open-wc/prettier-config`: ^0.1.10 → ^1.1.0
  - `@open-wc/testing`: ^2.5.29 → ^3.2.0
  - `@open-wc/testing-karma`: ^3.4.8 → ^4.0.9
  - `deepmerge`: ^3.2.0 → ^4.3.1
  - `eslint`: ^6.1.0 → ^8.56.0
  - `husky`: ^1.0.0 → ^8.0.3
  - `lint-staged`: ^8.0.0 → ^15.2.0
  - `lodash`: ^4.17.20 → ^4.17.21

### Fixed
- Modernized the `lint-staged` configuration by removing the deprecated `git add` command

## [3.0.2] - Previous version
