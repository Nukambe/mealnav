import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider, redirect } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { routes } from './Routes';
import Cookies from 'js-cookie';
import csrfFetch from './app/fetch';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

//get csrf token
csrfFetch('/api/auth');

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
