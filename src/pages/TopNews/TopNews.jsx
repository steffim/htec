import React, { useEffect } from 'react';
import { useGlobalState } from '../../helpers/useGlobalState';
import { newsService } from '../../services/newsService'
import { LANG } from '../../constants/constants';
import { fetchTopNewsStarted, fetchTopNewsFailed, fetchTopNewsFinished } from '../../actions/actions';
import Article from '../../components/Article/Article';
import Loader from '../../components/Loader/Loader';
import Page from '../../components/Page/Page';
import Grid from '../../components/Grid/Grid';

function TopNews() {
    const [{ language, topNews }, dispatch] = useGlobalState();
    const articles = Object.values(topNews.data).map(article => (
        <Article
            key={`article-${article.id}`}
            id={article.id}
            title={article.title}
            urlToImage={article.urlToImage}
            description={article.description}
        />
    ));
    useEffect(() => {
        function fetchNews() {
            if (Date.now() - topNews.updatedAt <= 60000) {
                return;
            }
            
            dispatch(fetchTopNewsStarted());

            newsService.fetchTopNews(language)
            .then(response => {
                if (response.status === 'ok') {
                    const updatedAt = Date.now();
                    const normalizedArticles = newsService.normalizeArticles(response.articles);

                    dispatch(fetchTopNewsFinished(normalizedArticles, updatedAt));
                } else {
                    dispatch(fetchTopNewsFailed());
                }
            });
        }

        fetchNews();
    }, [language]);

    return (
        <Page classNames="TopNews" title={`Top news from ${LANG[language.toUpperCase()].long}`}>
            <Grid items={articles} />
            {topNews.loading && <Loader />}
        </Page>
    );
}

export default TopNews;