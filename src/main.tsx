import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Trans } from "react-i18next";
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
     <Trans i18nKey=''>
        <BrowserRouter >
            <App />
        </BrowserRouter>
      </Trans>
  //</React.StrictMode>,
)
