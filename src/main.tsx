import React from 'react'
import ReactDOM from 'react-dom/client'
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
import App from './App'
import './index.css'
import "tailwindcss/tailwind.css";
import { BrowserRouter } from 'react-router-dom'
import  store  from './redux/store'
import { Provider } from 'react-redux'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
     <I18nextProvider i18n={i18n}>
        <BrowserRouter >
        <Provider store={store}>

            <App/>
        </Provider>
        </BrowserRouter>
      </I18nextProvider>
  //</React.StrictMode>,
)
