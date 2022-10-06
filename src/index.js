import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/component/redux/Store';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { initialize } from './app/component/keycloak/keycloak';



const container = document.getElementById('root');
const root = createRoot(container);

initialize().then( () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}).catch( () => {
  root.render(
    <React.StrictMode>
      <h1>Critical error! Keycloak has failed to load. Please contact admin.</h1>
    </React.StrictMode>
  );
})


