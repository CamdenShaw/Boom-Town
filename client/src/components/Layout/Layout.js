import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react';

import './styles.css';
import { HeaderContainer } from '../../containers/Header'
import CardFetch from '../common/CardFetch'

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            <HeaderContainer />
        </div>
        <div className="appContent">
            { children }

            <CardFetch>
                <Masonry /> 
            </CardFetch>
                
        </div>
        {/* And a footer here, but not on the login route... */}
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
