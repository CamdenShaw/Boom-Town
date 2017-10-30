import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react';
import { store } from '../../index'

import './styles.css';
import { HeaderContainer } from '../../containers/Header'
import Footer from '../../containers/Footer'
import ShareButton from '../common/ShareButton'

const loginUrl = 'http://localhost:3000/login'
const thisUrl = window.location.href

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        { store.users && thisUrl !== `${loginUrl}?` && <HeaderContainer />}
        <div className="appContent">
            { children }
        </div>
        { store.users  && thisUrl !== `${loginUrl}?` && thisUrl !== 'http://localhost:3000/share' && <ShareButton />}
        { store.users && thisUrl !== `${loginUrl}?` && <Footer /> }
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
