/*
@license MIT
Copyright (c) 2019 Horacio "LostInBrittany" Gonzalez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
import { LitElement, html } from 'lit-element';
import qrcode from '@lostinbrittany/jsqrcode';

class GraniteQrcodeDecoder extends LitElement {

  static get properties() {
    return {
      /**
      * The last decoded QRCode
      */
      lastDecodedData: {
        type: String,
        attribute: 'last-decoded-data',
        reflect: true,
      },
      /**
       * A dataURL string to decode. The decode is called everytime this property changes
       */
      dataUrl: {
        type: String,
        attribute: 'data-url',
      },
      /**
       * A blob object to decode, coming for example from an `app-media-image-capture` element
       */
      blob: {
        type: Object,
      },
      debug: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();

    this.lastDecodedData = '';
  }

  jsqrcodeCallback(data) {
    this.lastDecodedData = data;
    if (this.debug) {
      console.log('[granite-qrcode-decoder] jsqrcodeCallback', this.lastDecodedData);
    }
    this.dispatchEvent(new CustomEvent('qrcode-decoded', {
      detail: this.lastDecodedData,
      bubbles: true,
      composed: true,
    }));
  }

  updated(changedProperties) {
    if (this.debug) {
      console.log('[granite-qrcode-decoder] updated', changedProperties);
    }
    if (changedProperties.has('dataUrl')) {
      this._onDataUrlChanged();
    }
    if (changedProperties.has('blob')) {
      this._onBlobChanged();
    }
  }

  render() {
    if (this.debug) {
      console.log('[granite-qrcode-decoder] Rendering');
    }
    return html`
      <style>
        :host {
          display: none;
        }
      </style>
    `;
  }

  /**
   * A method to decode a QR Code in a canvas
   * @param qrcanvas Canvas the canvas
   */
  decodeCanvas(qrCanvas) {
    console.log('DECODING')
    qrcode.decodeWithCallback(this.jsqrcodeCallback.bind(this), '', qrCanvas);
  }

  _onDataUrlChanged() {
    if (this.dataUrl) {
      if (this.debug) {
        console.log('[granite-qrcode-decoder] _onDataUrlChange', this.dataUrl);
      }
      qrcode.decodeWithCallback(this.jsqrcodeCallback.bind(this), this.dataUrl);
    }
  }

  _onBlobChanged() {
    if (this.blob) {
      let reader = new FileReader();
      reader.readAsDataURL(this.blob);
      reader.onloadend = () => {
        this.dataUrl = reader.result;
        if (this.debug) {
          console.log('[granite-qrcode-decoder] _onBlobChanged', this.dataUrl);
        }
      };
    }
  }


}

customElements.define('granite-qrcode-decoder', GraniteQrcodeDecoder);
