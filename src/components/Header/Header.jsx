import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

import './Header.scss';
import useMedia from '../../helpers/useMedia';

function Header() {
    const [showMenu, setShowMenu] = useState(true);
    const phone = useMedia('(max-width: 576px)');

    useEffect(() => {
        setShowMenu(!phone);
    }, [phone]);

    function onMobileMenuClick() {
        if (phone) {
            setShowMenu(!showMenu);
        }
    }

    return (
        <header className="Header container">
        
            <div className={`Header-navigation-holder ${showMenu ? 'open' : 'closed'}`}>
                <Navigation classNames="pull-left" />
                <LanguageSwitcher classNames="pull-right" />
            </div>
            
            {phone &&
                <div className="mobile-menu" onClick={onMobileMenuClick}>
                    <div className="mobile-menu-line"></div>
                    <div className="mobile-menu-line"></div>
                    <div className="mobile-menu-line"></div>
                </div>
            }
        </header>
    );
}

export default Header;