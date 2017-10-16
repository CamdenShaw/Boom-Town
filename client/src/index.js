import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import configStore from './configStore';
import { Provider } from 'react-redux';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';

const store = configStore();

class Boomtown extends Component {
    render() {
        return (
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Layout>
                        {/* <Login /> */}
                    </Layout>
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
