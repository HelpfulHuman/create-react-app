import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import createStore from './Services/Store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import publicRoutes from './routes';
import axe from 'react-axe';
import App from './App';

const store = createStore();

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        {publicRoutes}
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
