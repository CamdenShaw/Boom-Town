import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react';

import './styles.css';
import { HeaderContainer } from '../../containers/Header'
import Footer from '../../containers/Footer'

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        { window.location.href !== 'http://localhost:3000/login' && <HeaderContainer />}
        <div className="appContent">
            { children }
        </div>
        { window.location.href !== 'http://localhost:3000/login' && <Footer /> }
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
