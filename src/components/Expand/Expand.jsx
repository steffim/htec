import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './Expand.scss';

const propTypes = {
    titleComponent: PropTypes.node.isRequired,
    classNames: PropTypes.string,
    isExpanded: PropTypes.bool,
    onExpand: PropTypes.func,
    onTitleClick: PropTypes.func,
    children: PropTypes.node
};

const defaultProps = {
    classNames: '',
    isExpanded: false,
    onExpand: null,
    onTitleClick: null,
    children: null
};

function Expand({ titleComponent, classNames, isExpanded, onExpand, children }) {
    const [expanded, setExpanded] = useState(isExpanded);

    const onExpandClick = useCallback(() => {
        if (!expanded && onExpand) {
            onExpand();
        }

        setExpanded(!expanded);
    }, [expanded, onExpand]);

    return (
        <div className={`Expand ${expanded ? 'expanded' : ''} ${classNames}`}>
            <div className="Expand-header" onClick={onExpandClick}>
                {titleComponent}
                
                <div className="Expand-header-icon-holder">
                    <span className={`arrow ${expanded ? 'open' : 'closed'}`} />
                </div>
            </div>
            {expanded &&
                <div className="Expand-content">
                    {children}
                </div>
            }
        </div>
    );
}

Expand.defaultProps = defaultProps;
Expand.propTypes = propTypes;

export default Expand;