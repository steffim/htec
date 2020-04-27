import React from 'react';
import PropTypes from 'prop-types';
import { navItems } from '../../constants/constants';
import { NavLink } from 'react-router-dom';

const propTypes = {
    classNames: PropTypes.string
};

const defaultProps = {
    classNames: ''
};

function Navigation({ classNames }) {
    return (
        <div className={`Navigation ${classNames}`}>
            <nav>
                <ul className="Navigation-list">
                {
                    navItems.map(item => (
                        <li
                            key={item.id}
                            className="Navigation-list-item"
                        >
                            <NavLink to={item.path} activeClassName="selected">{item.text}</NavLink>
                        </li>
                    ))
                }
                </ul>
            </nav>
        </div>
    );
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;