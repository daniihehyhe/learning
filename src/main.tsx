import ReactDOM from 'react-dom/client'
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import React from 'react';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
     <I18nextProvider i18n={i18n}>
        <BrowserRouter >
            <App/>
        </BrowserRouter>
      </I18nextProvider>
  //</React.StrictMode>,
)
