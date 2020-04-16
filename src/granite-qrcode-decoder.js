/*
@license MIT
Copyright (c) 2019-2020 Horacio "LostInBrittany" Gonzalez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
import { html, css, LitElement } from 'lit-element';
import qrcode from '@lostinbrittany/jsqrcode';


/**
 * A custom element to decode a QR Code from an image.
 * 
 * @element granite-qrcode-decoder
 * 
 * @prop {Object} blob - A blob object to decode, coming for example from an `app-media-image-capture` element 
 * @prop {String} dataUrl - A dataURL string to decode. The decode is called everytime this property changes
 * @prop {Boolean} debug - If debug is true, the components logs its actions on the console
 * @prop {String} lastDecodedData - The last decoded QRCode.
 * 
 * @event {CustomEvent<String>} qrcode-decodeded - Fires whenever a QRcode is decoded.
 */
export class GraniteQrcodeDecoder extends LitElement {

  static get properties() {
    return {
      blob: {
        type: Object,
      },
      dataUrl: {
        type: String,
        attribute: 'data-url',
      },
      debug: {
        type: Boolean,
      },
      lastDecodedData: {
        type: String,
        attribute: 'last-decoded-data',
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.blob = null;
    this.dataUrl= '';
    this.debug = false;
    this.lastDecodedData = '';
  }

  jsqrcodeCallback(data) {
    this.lastDecodedData = data;
    /* istanbul ignore next */ 
    if (this.debug) {
      console.log('[granite-qrcode-decoder] jsqrcodeCallback', this.lastDecodedData);
    }
    this.dispatchEvent(new CustomEvent('qrcode-decoded', {
      detail: this.lastDecodedData,
      bubbles: true,
      composed: true,
    }));
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
    /* istanbul ignore else */ 
    if (this.dataUrl) {
      /* istanbul ignore next */ 
      if (this.debug) {
        console.log('[granite-qrcode-decoder] _onDataUrlChange', this.dataUrl);
      }
      qrcode.decodeWithCallback(this.jsqrcodeCallback.bind(this), this.dataUrl);
    }
  }

  _onBlobChanged() {
    /* istanbul ignore next*/ 
    if (this.blob) {
      let reader = new FileReader();
      reader.readAsDataURL(this.blob);
      reader.onloadend = () => {
        this.dataUrl = reader.result;
        /* istanbul ignore next */ 
        if (this.debug) {
          console.log('[granite-qrcode-decoder] _onBlobChanged', this.dataUrl);
        }
      };
    }
  }

  updated(changedProperties) {
    /* istanbul ignore next */ 
    if (this.debug) {
      console.log('[granite-qrcode-decoder] updated', changedProperties);
    }
    /* istanbul ignore else*/ 
    if (changedProperties.has('dataUrl')) {
      this._onDataUrlChanged();
    }
    /* istanbul ignore else*/ 
    if (changedProperties.has('blob')) {
      this._onBlobChanged();
    }
  }  

  render() {
    return html`<div></div>`;
  }

  static get styles() {
    return css`
      :host {
        display: none;
      }
    `;
  }
}

window.customElements.define('granite-qrcode-decoder', GraniteQrcodeDecoder);