import React from 'react';
import { LANG, PAGES } from '../../constants/constants';
import { useGlobalState } from '../../helpers/useGlobalState';
import { setLanguage } from '../../actions/actions';

import './LanguageSwitcher.scss';

function LanguageSwitcher({ classNames }) {
    const [{ language, selectedPage }, dispatch] = useGlobalState();

    function onClick(e) {
        e.preventDefault();
        const lang = e.target.dataset.lang;

        dispatch(setLanguage(lang));
    }

    return (
        <div className={`LanguageSwitcher Navigation ${classNames} ${selectedPage === PAGES.article.id ? 'disabled' : ''}`}>
            <ul className="LanguageSwitcher-list Navigation-list">
            {
                Object.values(LANG).map(lang => 
                <li
                    key={lang.short}
                    className="LanguageSwitcher-item Navigation-list-item"
                >
                    <a
                        href="#"
                        className={`${lang.short === language ? 'selected' : ''}`}
                        data-lang={lang.short}
                        onClick={onClick}
                    >
                        {lang.short}
                    </a>
                </li>)
            }
            </ul>
        </div>
    );
}

export default LanguageSwitcher;