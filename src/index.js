import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RoutApp from './Routing/RoutApp';
import AgeDecreaseApp from './AgeDecrease/AgeDecreaseApp';
ReactDOM.render(<AgeDecreaseApp />, document.getElementById('root'));
registerServiceWorker();
