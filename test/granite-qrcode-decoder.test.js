import { html, fixture, expect } from '@open-wc/testing';

import '../index.js';

describe('GraniteQrcodeDecoder', () => {
  it('has a default empty dataUrl and lastDecodedData', async () => {
    const el = await fixture(html`
      <granite-qrcode-decoder></granite-qrcode-decoder>
    `);

    expect(el.dataUrl).to.equal('');
    expect(el.lastDecodedData).to.equal('');
  });

  it('setting a dataUrl decodes it', async () => {
    const el = await fixture(html`
      <granite-qrcode-decoder
          data-url="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAFyAQMAAADS6sNKAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABn0lEQVR4nO2aS46EMAxELXEAjsTVcyQO0FJ6sF0xBBazmlGhqoW7SV6ywYk/3WaSJEmSJP2Peupjtu3H42GaLd1sxVwTz8vHw/qxAFpRPlaIeE5+zTl3ijDTmPg38Lb9fCkj/m28DeOLTPwreP9YM17DLL+4/8Uz8Cm/xSeDOfG8/GXlNWg/UuK5eAA9Uu2soo7z7jWW4dCLJ+Uj7dozcjtfE1FDN/G8/EmneA1HiWxNPDOPVMy8y+Vjno9ZGjPxzDxqp2Z+toHmRsuD/4jn4ROAF/RRTw1HEU/M+1w0uFwRpZGK4eSLZ+UvpxzHf8Tr2M3EE/Nr3ufoYjq/ZHn1cJ+LZ+LrjdfKdAUY8cR8NTCnUgqucPcf8UR8lVJxlfse2e86NN/n4rn4fOPV5fKVg282STwXf14ZrepLenbrd4nn4nGuP8MzvJTqHY3s+f4Xz8XHw+h3HaosTDw/f3n36ILAUVptKZ6bv/9LKwO5+FfwMbwhXlvk4A+/L4un4v0jvKAPqtCn/qd4Hj6FAO3Ltx2L7v0T8VS8JEmSJEl/qS/3CycsizQPTAAAAABJRU5ErkJggg==" debug></granite-qrcode-decoder>
    `);
    el.addEventListener('qrcode-decoded', () => {
      expect(el.lastDecodedData).to.equal('https://github.com/LostInBrittany/')
    })
    
  });

  
  it('when calling decodeCanvas decodes a QRcode on a canvas', async () => {

    const canvas = await fixture(html`
      <canvas></canvas>
    `);
    const el = await fixture(html`
      <granite-qrcode-decoder></granite-qrcode-decoder>
    `);

    el.addEventListener('qrcode-decoded', () => {
      expect(el.lastDecodedData).to.equal('https://github.com/LostInBrittany/')
    })

    let img1 = new Image();
    img1.onload = function() {
      canvas.getContext('2d').drawImage(img1, 0, 0, 300, 300);
      el.decodeCanvas(canvas);
    };
    img1.src = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAFyAQMAAADS6sNKAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABn0lEQVR4nO2aS46EMAxELXEAjsTVcyQO0FJ6sF0xBBazmlGhqoW7SV6ywYk/3WaSJEmSJP2Peupjtu3H42GaLd1sxVwTz8vHw/qxAFpRPlaIeE5+zTl3ijDTmPg38Lb9fCkj/m28DeOLTPwreP9YM17DLL+4/8Uz8Cm/xSeDOfG8/GXlNWg/UuK5eAA9Uu2soo7z7jWW4dCLJ+Uj7dozcjtfE1FDN/G8/EmneA1HiWxNPDOPVMy8y+Vjno9ZGjPxzDxqp2Z+toHmRsuD/4jn4ROAF/RRTw1HEU/M+1w0uFwRpZGK4eSLZ+UvpxzHf8Tr2M3EE/Nr3ufoYjq/ZHn1cJ+LZ+LrjdfKdAUY8cR8NTCnUgqucPcf8UR8lVJxlfse2e86NN/n4rn4fOPV5fKVg282STwXf14ZrepLenbrd4nn4nGuP8MzvJTqHY3s+f4Xz8XHw+h3HaosTDw/f3n36ILAUVptKZ6bv/9LKwO5+FfwMbwhXlvk4A+/L4un4v0jvKAPqtCn/qd4Hj6FAO3Ltx2L7v0T8VS8JEmSJEl/qS/3CycsizQPTAAAAABJRU5ErkJggg==';
   
  });

  
});
