import React from 'react';
import PropTypes from 'prop-types';

import './Page.scss';

const propTypes = {
    title: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    children: PropTypes.node
};

const defaultProps = {
    classNames: '',
    children: null
};

function Page({ title, classNames, children }) {
    return (
        <div className={`Page container ${classNames}`}>
            <h1 className="Page-title">{title}</h1>
            <div className="Page-content">
                {children}
            </div>
        </div>
    );
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;