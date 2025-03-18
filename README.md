[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/LostInBrittanygranite-qrcode-decoder)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/LostInBrittanygranite-qrcode-decoder.svg)](https://vaadin.com/directory/component/LostInBrittanygranite-qrcode-decoder)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LostInBrittany/granite-qrcode-decoder)

# \<granite-qrcode-decoder>

A custom element to decode a QR Code from an image, using [a modified version](https://github.com/LostInBrittany/jsqrcode) of [Lazersoft's jsqrcode](https://github.com/LazerSoft/jsqrcode) library, to allow `jsqrcode` to deal with ShadowDOM

Built on [lit](https://lit.dev/) following the [open-wc](https://github.com/open-wc/open-wc) recommendation.

> The old Polymer 2.x-1.x version is available on the [`polymer-hybrid` branch](https://github.com/LostInBrittany/granite-qrcode-decoder/tree/polymer-hybrid).


## Installation

```bash
npm i granite-qrcode-decoder
```

## Usage

The element can decode several sources of images:

- A dataURL, by using the `dataUrl` property
- An [`app-media-image-capture`](https://github.com/PolymerElements/app-media/elements/app-media-image-capture), by injecting it to the `blob` property
- A canvas, by calling the `decodeCanvas` method passing the canvas as parameter


```html
<script type="module">
  import 'granite-qrcode-decoder/index.js';
</script>

<granite-qrcode-decoder
    @qrcode-decoded="${method_listening_for_data}"
    data-url="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAFyAQMAAADS6sNKAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABn0lEQVR4nO2aS46EMAxELXEAjsTVcyQO0FJ6sF0xBBazmlGhqoW7SV6ywYk/3WaSJEmSJP2Peupjtu3H42GaLd1sxVwTz8vHw/qxAFpRPlaIeE5+zTl3ijDTmPg38Lb9fCkj/m28DeOLTPwreP9YM17DLL+4/8Uz8Cm/xSeDOfG8/GXlNWg/UuK5eAA9Uu2soo7z7jWW4dCLJ+Uj7dozcjtfE1FDN/G8/EmneA1HiWxNPDOPVMy8y+Vjno9ZGjPxzDxqp2Z+toHmRsuD/4jn4ROAF/RRTw1HEU/M+1w0uFwRpZGK4eSLZ+UvpxzHf8Tr2M3EE/Nr3ufoYjq/ZHn1cJ+LZ+LrjdfKdAUY8cR8NTCnUgqucPcf8UR8lVJxlfse2e86NN/n4rn4fOPV5fKVg282STwXf14ZrepLenbrd4nn4nGuP8MzvJTqHY3s+f4Xz8XHw+h3HaosTDw/f3n36ILAUVptKZ6bv/9LKwO5+FfwMbwhXlvk4A+/L4un4v0jvKAPqtCn/qd4Hj6FAO3Ltx2L7v0T8VS8JEmSJEl/qS/3CycsizQPTAAAAABJRU5ErkJggg==" 
    debug></granite-qrcode-decoder>
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```

## Testing with Karma
To run the suite of karma tests, run
```bash
npm run test
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```

## Demoing with Storybook
To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.
\
## Local Demo with `@web/dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)
