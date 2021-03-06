import reactDom from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './app/store'
import './App.css';
import 'antd/dist/antd.css';

reactDom.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
, document.getElementById('root'))