# @dev-prime/bem-helper

`@dev-prime/bem-helper` is a lightweight and versatile helper function for generating BEM (Block Element Modifier) compliant class names, particularly designed for front-end frameworks such as Vue, React and Angular.

## Features

- Easy integration with Vue.js and other front-end frameworks.
- Supports multiple modifiers for components.
- Simple to use and integrate into existing projects.

## Installation

To install `@dev-prime/bem-helper`, use npm or yarn:

```bash
npm install @dev-prime/bem-helper
```

## Usage

Basic usage of @dev-prime/bem-helper in a Vue.js component:

```bash
import { useBem } from '@dev-prime/bem-helper';

const bem = useBem('button');

// For an element without modifiers
console.log(bem({ e: 'icon' })); // "button__icon"

// For an element with a modifier
console.log(bem({ e: 'icon', m: 'active' })); // "button__icon button__icon--active"

// For an element with multiple modifiers
console.log(bem({ e: 'icon', m: ['active', 'large'] })); // "button__icon button__icon--active button__icon--large"
```

## Supported Frameworks

`@dev-prime/bem-helper` is designed for use with Vue.js but can also be utilized with other frameworks such as React, Angular, etc.

## License

`@dev-prime/bem-helper` is available under the MIT license. See the LICENSE file in the code repository for full terms.