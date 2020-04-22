import React, { useEffect } from 'react';
import { useGlobalState } from '../../helpers/useGlobalState';
import { newsService } from '../../services/newsService'
import { LANG } from '../../constants/constants';
import { fetchTopNewsStarted, fetchTopNewsFailed, fetchTopNewsFinished } from '../../actions/actions';
import Article from '../../components/Article/Article';
import Loader from '../../components/Loader/Loader';

import './TopNews.scss';
import Page from '../../components/Page/Page';

function TopNews() {
    const [{ language, articles }, dispatch] = useGlobalState();

    useEffect(() => {
        dispatch(fetchTopNewsStarted());

        newsService.fetchTopNews(language)
        .then(response => response.json())
        .then(response => {
            if (response.status === 'ok') {
                dispatch(fetchTopNewsFinished(response.articles));
            } else {
                dispatch(fetchTopNewsFailed());
            }
        });
    }, [language]);

    return (
        <Page classNames="TopNews" title={`Top news from ${LANG[language.toUpperCase()].long}`}>
            <div className="TopNews-articles">
                {
                    articles.data.map((article, index) => (
                        <Article
                            key={`article-${index}`}
                            article={article}
                        />
                    ))
                }
            </div>
            {articles.loading && <Loader />}
        </Page>
    );
}

export default TopNews;