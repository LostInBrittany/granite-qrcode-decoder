[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/LostInBrittanygranite-qrcode-decoder)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/LostInBrittanygranite-qrcode-decoder.svg)](https://vaadin.com/directory/component/LostInBrittanygranite-qrcode-decoder)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LostInBrittany/granite-qrcode-decoder)

# granite-qrcode-decoder

> An element to decode a QR Code from an image. 
> using [a modified version](https://github.com/LostInBrittany/jsqrcode) of [Lazersoft's jsqrcode](https://github.com/LazerSoft/jsqrcode) library, to allow `jsqrcode` to deal with ShadowDOM
>
> Built on [lit-element](https://github.com/Polymer/lit-element)
>
> The old Polymer 2.x-1.x version is available on the [`polymer-hybrid` branch](https://github.com/LostInBrittany/granite-qrcode-decoder/tree/polymer-hybrid).


## Doc & demo

The element can decode several sources of images:

- A dataURL, by using the `dataUrl` property
- An [`app-media-image-capture`](https://github.com/PolymerElements/app-media/elements/app-media-image-capture), by injecting it to the `blob` property
- A canvas, by calling the `decodeCanvas` method passing the canvas as parameter

[https://lostinbrittany.github.io/granite-qrcode-decoder](https://lostinbrittany.github.io/granite-qrcode-decoder)


## Usage example

<!--
```
<custom-element-demo>
  <template>
    <script src="@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
    <script src="@granite-elements/granite-qrcode-decoder/granite-qrcode-decoder.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
    <granite-qrcode-decoder
        @qrcode-decoded="${method_listening_for_data}"
        data-url="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAFyAQMAAADS6sNKAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABn0lEQVR4nO2aS46EMAxELXEAjsTVcyQO0FJ6sF0xBBazmlGhqoW7SV6ywYk/3WaSJEmSJP2Peupjtu3H42GaLd1sxVwTz8vHw/qxAFpRPlaIeE5+zTl3ijDTmPg38Lb9fCkj/m28DeOLTPwreP9YM17DLL+4/8Uz8Cm/xSeDOfG8/GXlNWg/UuK5eAA9Uu2soo7z7jWW4dCLJ+Uj7dozcjtfE1FDN/G8/EmneA1HiWxNPDOPVMy8y+Vjno9ZGjPxzDxqp2Z+toHmRsuD/4jn4ROAF/RRTw1HEU/M+1w0uFwRpZGK4eSLZ+UvpxzHf8Tr2M3EE/Nr3ufoYjq/ZHn1cJ+LZ+LrjdfKdAUY8cR8NTCnUgqucPcf8UR8lVJxlfse2e86NN/n4rn4fOPV5fKVg282STwXf14ZrepLenbrd4nn4nGuP8MzvJTqHY3s+f4Xz8XHw+h3HaosTDw/f3n36ILAUVptKZ6bv/9LKwO5+FfwMbwhXlvk4A+/L4un4v0jvKAPqtCn/qd4Hj6FAO3Ltx2L7v0T8VS8JEmSJEl/qS/3CycsizQPTAAAAABJRU5ErkJggg==" 
        debug></granite-qrcode-decoder>
```


## Install



Install the component using [npm](https://www.npmjs.com/):

```sh
$ npm i @granite-elements//granite-qrcode-decoder 
```

Once installed, import it in your application:

import '@granite-elements/granite-qrcode-decoder/granite-qrcode-decoder.js';


## Running demos and tests in browser

1. Fork the `granite-qrcode-decoder` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) 
and the [Polymer CLI](https://www.polymer-project.org/3.0/docs/tools/polymer-cli) installed.

1. When in the `granite-qrcode-decoder` directory, run `npm install` to install dependencies.

1. Serve the project using Polyumer CLI:

    `polymer serve --npm`

1. Open the demo in the browser

    - http://127.0.0.1:8080/components/@greanite-elements/granite-qrcode-decoder/demo



## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)

