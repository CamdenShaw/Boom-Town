import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ApolloProvider } from 'react-apollo'
import muiTheme from './config/theme';
import * as firebase from 'firebase'

import registerServiceWorker from './registerServiceWorker';
import configStore from './redux/configStore';
import Routers from './Router';
import { notAuthorized, userAuthorized } from './redux/modules/authReducer'
import client from './config/apolloClient'
import './index.css';




const config = {
    apiKey: "AIzaSyCacootitVuGBMMLraKExCak9LGqgdb-LE",
    authDomain: "boomtown-52ff4.firebaseapp.com",
    databaseURL: "https://boomtown-52ff4.firebaseio.com",
    projectId: "boomtown-52ff4",
    storageBucket: "boomtown-52ff4.appspot.com",
    messagingSenderId: "24265605984"
  };
  
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    user ? store.dispatch(userAuthorized(user)) : store.dispatch(notAuthorized())
})

export const store = configStore;

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