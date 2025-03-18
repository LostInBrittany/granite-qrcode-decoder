import { html } from 'lit';
import '../index.js';

export default {
  title: 'GraniteQrcodeDecoder',
  component: 'granite-qrcode-decoder',
  argTypes: {
    dataUrl: { control: 'text' },
    debug: { control: 'boolean' }
  },
};

const Template = ({ dataUrl, debug }) => html`
  <granite-qrcode-decoder
    data-url="${dataUrl}"
    ?debug="${debug}"
    @qrcode-decoded="${(e) => console.log('QR Code decoded:', e.detail)}">
  </granite-qrcode-decoder>
  <div>
    <p>Scan result will appear in the browser console.</p>
    <p>If debug is enabled, additional information will be logged to the console.</p>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
  dataUrl: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAFyAQMAAADS6sNKAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABn0lEQVR4nO2aS46EMAxELXEAjsTVcyQO0FJ6sF0xBBazmlGhqoW7SV6ywYk/3WaSJEmSJP2Peupjtu3H42GaLd1sxVwTz8vHw/qxAFpRPlaIeE5+zTl3ijDTmPg38Lb9fCkj/m28DeOLTPwreP9YM17DLL+4/8Uz8Cm/xSeDOfG8/GXlNWg/UuK5eAA9Uu2soo7z7jWW4dCLJ+Uj7dozcjtfE1FDN/G8/EmneA1HiWxNPDOPVMy8y+Vjno9ZGjPxzDxqp2Z+toHmRsuD/4jn4ROAF/RRTw1HEU/M+1w0uFwRpZGK4eSLZ+UvpxzHf8Tr2M3EE/Nr3ufoYjq/ZHn1cJ+LZ+LrjdfKdAUY8cR8NTCnUgqucPcf8UR8lVJxlfse2e86NN/n4rn4fOPV5fKVg282STwXf14ZrepLenbrd4nn4nGuP8MzvJTqHY3s+f4Xz8XHw+h3HaosTDw/f3n36ILAUVptKZ6bv/9LKwO5+FfwMbwhXlvk4A+/L4un4v0jvKAPqtCn/qd4Hj6FAO3Ltx2L7v0T8VS8JEmSJEl/qS/3CycsizQPTAAAAABJRU5ErkJggg==",
  debug: true
};

export const EmptyDecoder = Template.bind({});
EmptyDecoder.args = {
  dataUrl: "",
  debug: false
};

// Example of how to use the component with canvas
export const CanvasExample = () => {
  // This is just a demonstration - in a real app, you would draw to the canvas
  // and then call decodeCanvas on the component
  return html`
    <div>
      <p>To decode from a canvas:</p>
      <pre>
        const canvas = document.getElementById('my-canvas');
        const decoder = document.getElementById('my-decoder');
        decoder.decodeCanvas(canvas);
      </pre>
      <canvas id="qr-canvas" width="300" height="300"></canvas>
      <granite-qrcode-decoder
        id="qrcodeDecoder"
        debug>
      </granite-qrcode-decoder>
    </div>
  `;
};
