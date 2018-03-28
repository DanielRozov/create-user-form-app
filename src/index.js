import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'primereact/resources/primereact.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
