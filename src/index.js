import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';

import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/BC53-react">
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
