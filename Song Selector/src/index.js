import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';

import App from './components/App';
import reducers from './reducers'; // it will automatically import index.js file, no need to explicitly write /index.js


ReactDOM.render(
    <Provider store = {createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);