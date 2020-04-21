import React from 'react';
import { PAGES } from '../../constants/constants';
import { setPage } from '../../actions/actions';
import { useGlobalState } from '../../helpers/useGlobalState';

function Navigation() {
    const [,dispatch] = useGlobalState();
    const items = [
        {
            id: PAGES.topNews.id,
            type: 'page',
            text: PAGES.topNews.title,
            onClick: () => { dispatch(setPage(PAGES.topNews.id)) }
        },
        {
            id: PAGES.categories.id,
            type: 'page',
            text: PAGES.categories.title,
            onClick: () => { dispatch(setPage(PAGES.categories.id)) }
        },
        {
            id: PAGES.search.id,
            type: 'page',
            text: PAGES.search.title,
            onClick: () => { dispatch(setPage(PAGES.search.id)) }
        }
    ];
    
    return (
        <div className="Navigation">
            {
                items.map(item => <button key={item.id} onClick={item.onClick}>{ item.text }</button>)
            }
        </div>
    );
}

export default Navigation;