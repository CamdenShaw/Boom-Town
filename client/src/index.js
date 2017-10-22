import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import configStore from './redux/configStore';
import { ApolloProvider } from 'react-apollo'
import Routers from './Router';

import './index.css';
import muiTheme from './config/theme';

import client from './config/apolloClient'

const store = configStore();

class Boomtown extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Routers></Routers>
            </MuiThemeProvider>
        )
    }
};

ReactDOM.render(
    <ApolloProvider client={client} store={store}>
    <Boomtown />
    </ApolloProvider>,
 document.getElementById('root'));
registerServiceWorker();
