import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react';
import { store } from '../../index'

import './styles.css';
import { HeaderContainer } from '../../containers/Header'
import Footer from '../../containers/Footer'
import ShareButton from '../common/ShareButton'

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <HeaderContainer />
        <div className="appContent">
            { children }
        </div>
        <ShareButton />
        <Footer />
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;