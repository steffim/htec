import React, { useEffect, useState } from 'react';
import Page from '../components/Page/Page';
import Grid from '../components/Grid/Grid';
import { useGlobalState } from '../helpers/useGlobalState';
import { LANG } from '../constants/constants';
import { fetchTopNewsByTermStarted, fetchTopNewsByTermFinished, fetchTopNewsByTermFailed } from '../actions/actions';
import { newsService } from '../services/newsService';
import Article from '../components/Article/Article';

function Search() {
    const [{ language, search }, dispatch] = useGlobalState();
    const [searchValue, setSearchValue] = useState('');
    const articles = Object.values(search.data).map(article => (
        <Article
            key={`article-${article.id}`}
            title={article.title}
            urlToImage={article.urlToImage}
            description={article.description}
            articleUrl={article.path}
        />
    ));

    const onSearch = () => {
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

    const onChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <Page title={`Search top news from ${LANG[language.toUpperCase()].long} by term:`}>
            <input type="text" placeholder="Search term..." value={searchValue} onChange={onChange} />
            <button onClick={onSearch}>Search</button>
            <Grid items={articles} />
        </Page>
    );
}

export default Search;