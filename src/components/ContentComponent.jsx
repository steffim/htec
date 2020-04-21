import React from 'react';
import TopNews from '../pages/TopNews/TopNews';
import Categories from '../pages/Categories';
import Search from '../pages/Search';
import { useGlobalState } from '../helpers/useGlobalState';
import { PAGES } from '../constants/constants';

function ContentComponent() {
    const [{ selectedPage }] = useGlobalState();

    switch(selectedPage) {
        case PAGES.topNews.id:
            return <TopNews />;
        case PAGES.categories.id:
            return <Categories />;
        case PAGES.search.id:
            return <Search />;
        default:
            return <TopNews />;
    }
}

export default ContentComponent;