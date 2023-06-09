import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import {App} from 'components/App';
import { store } from 'redux/store';
import './index.css';
import { light } from 'utils/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="goit-react-hw-08-phonebook">
          <ThemeProvider theme={light}>
          <App />
          </ThemeProvider>
        </BrowserRouter>
    </Provider> 
  </React.StrictMode>
);
