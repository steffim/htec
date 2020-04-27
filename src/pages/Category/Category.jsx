import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useGlobalState } from '../../helpers/useGlobalState';
import {
    fetchNewsByCategoryStarted,
    fetchNewsByCategoryFinished,
    fetchNewsByCategoryFailed
} from '../../actions/actions';
import { newsService } from '../../services/newsService';

import Page from '../../components/Page/Page';
import Grid from '../../components/Grid/Grid';
import Article from '../../components/Article/Article'
import Loader from '../../components/Loader/Loader';

function Category() {
    const [{ language, categories }, dispatch] = useGlobalState();
    const { url, params } = useRouteMatch();
    const { categoryId } = params;
    const category = categories[categoryId];
    
    useEffect(() => {
        if (Object.keys(category.data).length === 0) {
            dispatch(fetchNewsByCategoryStarted(categoryId));

            newsService.fetchNewsByCategory(language.toLowerCase(), categoryId)
            .then(response => {
                if (response.status === 'ok') {
                    const updatedAt = Date.now();
                    const normalizedArticles = newsService.normalizeArticles(response.articles, url);

                    dispatch(fetchNewsByCategoryFinished(categoryId, normalizedArticles, updatedAt));
                } else {
                    dispatch(fetchNewsByCategoryFailed(categoryId));
                }
            });
        }
    }, [language, categoryId]);

    const articles = Object.values(category.data).map(article => (
        <Article
            key={`article-${article.id}`}
            title={article.title}
            urlToImage={article.urlToImage}
            description={article.description}
            articleUrl={article.path}
        />
    ));

    return (
        <Page classNames="Category" title={`Top ${categoryId} news from ${language}`}>
            <Grid items={articles} />
            {category.loading && <Loader />}
        </Page>
    );
}

export default Category;