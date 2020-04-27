import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import Expand from '../../components/Expand/Expand';
import Article from '../../components/Article/Article';
import Loader from '../../components/Loader/Loader';
import { useGlobalState } from '../../helpers/useGlobalState';
import { CATEGORIES, CATEGORY_MAX_ITEMS, TIMEOUT_BETWEEN_REQUESTS } from '../../constants/constants';

import {
    fetchNewsByCategoryStarted,
    fetchNewsByCategoryFinished,
    fetchNewsByCategoryFailed
} from '../../actions/actions';
import { newsService } from '../../services/newsService';
import Slider from '../../components/Slider/Slider';

const propTypes = {
    category: PropTypes.string.isRequired
};

function CategoryItem({ category }) {
    const [{ language, categories }, dispatch] = useGlobalState();
    const { url } = useRouteMatch();
    const titleComponent = <div><Link to={`${url}/${category}`}>{CATEGORIES[category]}</Link></div>;

    function onExpand() {        
        if (Date.now() - categories[category].updatedAt <= TIMEOUT_BETWEEN_REQUESTS) {
            return;
        }

        dispatch(fetchNewsByCategoryStarted(category));

        newsService.fetchNewsByCategory(language.toLowerCase(), category)
        .then(response => {
            if (response.status === 'ok') {
                const updatedAt = Date.now();
                const articlesPath = `${url}/${category}`
                const normalizedArticles = newsService.normalizeArticles(response.articles, articlesPath);

                dispatch(fetchNewsByCategoryFinished(category, normalizedArticles, updatedAt));
            } else {
                dispatch(fetchNewsByCategoryFailed(category));
            }
        });
    }

    const items = Object.keys(categories[category].data).slice(0, CATEGORY_MAX_ITEMS).map(articleId => {
        const article = categories[category].data[articleId];

        return (
            <Article
                key={`${category}-article-${articleId}`}
                title={article.title}
                urlToImage={article.urlToImage}
                description={article.description}
                classNames="Categories-list-item-articles-article"
                articleUrl={article.path}
            />
        );
    });

    return (
        <Expand titleComponent={titleComponent} onExpand={onExpand}>
            <div className="Categories-list-item-articles">
            {
                <Slider items={items} />
            }
            {categories[category].loading && <Loader />}
            </div>
        </Expand>
    );
}

CategoryItem.propTypes = propTypes;

export default React.memo(CategoryItem);