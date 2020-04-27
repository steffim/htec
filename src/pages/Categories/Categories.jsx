import React from 'react';
import { useGlobalState } from '../../helpers/useGlobalState';
import { CATEGORIES, CATEGORY_MAX_ITEMS } from '../../constants/constants';

import Page from '../../components/Page/Page';

import './Categories.scss';
import CategoryItem from './CategoryItem';

function Categories() {
    const [{ language }] = useGlobalState();

    return (
        <Page title={`Top ${CATEGORY_MAX_ITEMS} news by categories from ${language}`} classNames="Categories">
            <ul className="Categories-list">
                {
                    Object.keys(CATEGORIES).map(category => {
                        return (
                            <li key={category} className="Categories-list-item">
                                <CategoryItem category={category} />
                            </li>
                        )
                    })
                }
            </ul>
        </Page>
    );
}

export default React.memo(Categories);