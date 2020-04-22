import React from 'react';
import TopNews from '../pages/TopNews/TopNews';
import Categories from '../pages/Categories/Categories';
import Search from '../pages/Search';
import { useGlobalState } from '../helpers/useGlobalState';
import { PAGES } from '../constants/constants';
import ArticlePage from '../pages/Article/Article';

function ContentComponent() {
    const [{ selectedPage }] = useGlobalState();

    switch(selectedPage) {
        case PAGES.topNews.id:
            return <TopNews />;
        case PAGES.categories.id:
            return <Categories />;
        case PAGES.search.id:
            return <Search />;
        case PAGES.article.id:
            return <ArticlePage />
        default:
            return <TopNews />;
    }
}

export default ContentComponent;