/** @type { import('@storybook/web-components').Preview } */

import { fn } from '@storybook/test';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    iframeHeight: '200px',
  }
};

// Define explicit actions for common events instead of using argTypesRegex
export const argTypes = {
  onClick: { action: 'clicked' },
  onKeyDown: { action: 'key down' },
  onKeyUp: { action: 'key up' },
  onChange: { action: 'changed' },
  onInput: { action: 'input' },
  onFocus: { action: 'focused' },
  onBlur: { action: 'blurred' },
  // Add specific event handlers for your component
  'qrcode-decoded': { action: 'qrcode decoded' }
};

// Use fn from @storybook/test for action handlers
export const decorators = [
  (Story) => {
    return Story();
  },
];

// Attempt to load custom elements manifest if available
// Using dynamic import for ES modules compatibility with Vite
async function loadCustomElementsManifest() {
  try {
    // Check if the file exists first using fetch
    const response = await fetch('/custom-elements.json');
    if (response.ok) {
      const customElementsManifest = await response.json();
      console.log('Custom elements manifest loaded successfully');
      return customElementsManifest;
    }
  } catch (e) {
    console.warn('Could not load custom-elements.json', e);
  }
  return null;
}

// Call the function but don't block initialization
loadCustomElementsManifest();
