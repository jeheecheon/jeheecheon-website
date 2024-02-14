import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from '@/common/redux/store';

import App from '@/App';
import React from 'react';
import '@/main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </>
)
