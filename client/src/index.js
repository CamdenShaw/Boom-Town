import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import configStore from './configStore';
import { Provider } from 'react-redux';
import Routers from './Router';

import './index.css';
import muiTheme from './config/theme';

const store = configStore();

class Boomtown extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Routers>
                </Routers>
            </MuiThemeProvider>
        )
    }
};

ReactDOM.render(
    <Provider store={store}>
    <Boomtown />
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
