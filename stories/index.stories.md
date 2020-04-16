```js script
import { html } from '@open-wc/demoing-storybook';
import '../index.js';

export default {
  title: 'GraniteQrcodeDecoder',
  component: 'granite-qrcode-decoder',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# GraniteQrcodeDecoder

A custom element to decode a QR Code from an image, 

## Features:

Using [a modified version](https://github.com/LostInBrittany/jsqrcode) of [Lazersoft's jsqrcode](https://github.com/LazerSoft/jsqrcode) library, to allow `jsqrcode` to deal with ShadowDOM

Built on [lit-element](https://github.com/Polymer/lit-element) following the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## How to use

### Installation

```bash
yarn add granite-qrcode-decoder
```

```js
import 'granite-qrcode-decoder/index.js';
```

```js preview-story
export const Simple = () => html`
<granite-qrcode-decoder
    data-url="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAFyAQMAAADS6sNKAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABn0lEQVR4nO2aS46EMAxELXEAjsTVcyQO0FJ6sF0xBBazmlGhqoW7SV6ywYk/3WaSJEmSJP2Peupjtu3H42GaLd1sxVwTz8vHw/qxAFpRPlaIeE5+zTl3ijDTmPg38Lb9fCkj/m28DeOLTPwreP9YM17DLL+4/8Uz8Cm/xSeDOfG8/GXlNWg/UuK5eAA9Uu2soo7z7jWW4dCLJ+Uj7dozcjtfE1FDN/G8/EmneA1HiWxNPDOPVMy8y+Vjno9ZGjPxzDxqp2Z+toHmRsuD/4jn4ROAF/RRTw1HEU/M+1w0uFwRpZGK4eSLZ+UvpxzHf8Tr2M3EE/Nr3ufoYjq/ZHn1cJ+LZ+LrjdfKdAUY8cR8NTCnUgqucPcf8UR8lVJxlfse2e86NN/n4rn4fOPV5fKVg282STwXf14ZrepLenbrd4nn4nGuP8MzvJTqHY3s+f4Xz8XHw+h3HaosTDw/f3n36ILAUVptKZ6bv/9LKwO5+FfwMbwhXlvk4A+/L4un4v0jvKAPqtCn/qd4Hj6FAO3Ltx2L7v0T8VS8JEmSJEl/qS/3CycsizQPTAAAAABJRU5ErkJggg=="></granite-qrcode-decoder>
`;
```

