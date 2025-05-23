import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import { Provider } from "react-redux";
import { store } from "./store/index";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
