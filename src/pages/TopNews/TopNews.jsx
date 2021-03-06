import React, { useEffect } from 'react';
import { useGlobalState } from '../../helpers/useGlobalState';
import { newsService } from '../../services/newsService'
import { LANG, TIMEOUT_BETWEEN_REQUESTS } from '../../constants/constants';
import { fetchTopNewsStarted, fetchTopNewsFailed, fetchTopNewsFinished } from '../../actions/actions';
import Article from '../../components/Article/Article';
import Loader from '../../components/Loader/Loader';
import Page from '../../components/Page/Page';
import Grid from '../../components/Grid/Grid';

function TopNews() {
    const [{ language, topNews }, dispatch] = useGlobalState();

    useEffect(() => {
        function fetchNews() {
            if (Date.now() - topNews.updatedAt <= TIMEOUT_BETWEEN_REQUESTS) {
                return;
            }

            dispatch(fetchTopNewsStarted());

            newsService.fetchTopNews(language)
            .then(response => {
                if (response.status === 'ok') {
                    const updatedAt = Date.now();
                    const normalizedArticles = newsService.normalizeArticles(response.articles, '/topNews');

                    dispatch(fetchTopNewsFinished(normalizedArticles, updatedAt));
                } else {
                    dispatch(fetchTopNewsFailed());
                }
            });
        }

        fetchNews();
    }, [language]);

    const articles = Object.values(topNews.data).map(article => (
        <Article
            key={`article-${article.id}`}
            title={article.title}
            urlToImage={article.urlToImage}
            description={article.description}
            articleUrl={article.path}
        />
    ));

    return (
        <Page classNames="TopNews" title={`Top news from ${LANG[language.toUpperCase()].long}`}>
            <Grid items={articles} />
            {topNews.loading && <Loader />}
        </Page>
    );
}

export default TopNews;