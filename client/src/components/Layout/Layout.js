import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react';
import { store } from '../../index'

import './styles.css';
import { HeaderContainer } from '../../containers/Header'
import Footer from '../../containers/Footer'
import ShareButton from '../common/ShareButton'

const p404 = 'http://localhost:3000/404'

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        { window.location.href !== p404 && <HeaderContainer /> }
        <div className="appContent">
            { children }
        </div>
        { window.location.href !== p404 && <ShareButton /> }
        { window.location.href !== p404 && <Footer /> }
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;