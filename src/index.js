import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create a root

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);