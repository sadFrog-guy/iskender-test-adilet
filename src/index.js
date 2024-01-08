import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import reportWebVitals from './reportWebVitals';
import { EnterProvider } from './context/EnterContext';
import { BasketProvider } from './context/BasketContext';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode
  <>
    <Router>
      <Provider store={store}>
        <EnterProvider>
          <BasketProvider>
            <App />
          </BasketProvider>
        </EnterProvider>
      </Provider>
    </Router>
  </>
);

reportWebVitals();
