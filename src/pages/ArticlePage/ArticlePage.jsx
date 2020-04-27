import React, { useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { useGlobalState } from '../../helpers/useGlobalState';
import { PAGES } from '../../constants/constants';

import './ArticlePage.scss';
import { setPage } from '../../actions/actions';

function useArticle(url) {
    const [state] = useGlobalState();
    const params = url.split('/');

    switch(params[1]) {
        case PAGES.topNews.id:
        case PAGES.search.id:
            return Object.keys(state[params[1]].data).length > 0
            ? state[params[1]].data[params[2]]
            : null;
        case PAGES.categories.id:
            return Object.keys(state[params[1]][params[2]].data).length
            ? state[params[1]][params[2]].data[params[3]]
            : null;
        default:
            return null;
    }
}

function ArticlePage() {
    const history = useHistory();
    const { url } = useRouteMatch();
    const article = useArticle(url);
    const [, dispatch] = useGlobalState();

    useEffect(() => {
        dispatch(setPage('article'));

        return () => dispatch(setPage(''));
    }, []);

    if (!article) {
        history.push(`/`);
        
        return null;
    }

    const onBackClick = () => {
        history.goBack();
    };

    return (
        <div className="ArticlePage container">
            <h2 className="ArticlePage-title">{article.title}</h2>
            <img className="ArticlePage-img" src={article.urlToImage} alt={article.title} />
            <div className="ArticlePage-content">{article.content}</div>

            <button onClick={onBackClick}>{'< Back to list'}</button>
        </div>
    );
}

export default ArticlePage;