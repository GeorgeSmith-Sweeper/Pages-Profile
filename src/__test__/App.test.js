import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App';

it('renders without crashing', () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  act(() => root.render(<App />));
  act(() => root.unmount());
});
