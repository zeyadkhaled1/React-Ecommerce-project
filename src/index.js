import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './Redux/Store';
import 'bootstrap/dist/js/bootstrap.js';
if (document.documentElement.dir === 'rtl') import('bootstrap/dist/css/bootstrap.rtl.min.css');
else import('bootstrap/dist/css/bootstrap.min.css');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
