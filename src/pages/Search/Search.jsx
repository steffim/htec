import React from 'react';
import Page from '../../components/Page/Page';
import Grid from '../../components/Grid/Grid';
import Article from '../../components/Article/Article';
import { useGlobalState } from '../../helpers/useGlobalState';
import { LANG } from '../../constants/constants';
import { fetchTopNewsByTermStarted, fetchTopNewsByTermFinished, fetchTopNewsByTermFailed } from '../../actions/actions';
import { newsService } from '../../services/newsService';

import './Search.scss';
import Loader from '../../components/Loader/Loader';

function Search() {
    const [{ language, search }, dispatch] = useGlobalState();
    const articles = Object.values(search.data).map(article => (
        <Article
            key={`article-${article.id}`}
            title={article.title}
            urlToImage={article.urlToImage}
            description={article.description}
            articleUrl={article.path}
        />
    ));

    const fetchSearchResults = (searchValue) => {
        dispatch(fetchTopNewsByTermStarted());

        newsService.fetchTopNewsByTerm(language, searchValue)
        .then(response => {
            if (response.status === 'ok') {
                const normalizedArticles = newsService.normalizeArticles(response.articles, '/search');
                dispatch(fetchTopNewsByTermFinished(normalizedArticles));
            } else {
                dispatch(fetchTopNewsByTermFailed());
            }
        })
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchSearchResults(e.target.value);
        }
    }

    return (
        <Page title={`Search top news from ${LANG[language.toUpperCase()].long} by term:`} classNames="Search">
            <input
                type="text"
                className="Search-input"
                placeholder="Search term..."
                onKeyPress={onKeyPress}
            />
            <Grid items={articles} />
            {search.loading && <Loader />}
        </Page>
    );
}

export default Search;