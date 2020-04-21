import React, { useEffect } from 'react';
import { useGlobalState } from '../../helpers/useGlobalState';
import { newsService } from '../../services/newsService'
import { LANG } from '../../constants/constants';
import { fetchTopNewsStarted, fetchTopNewsFailed, fetchTopNewsFinished } from '../../actions/actions';
import Article from '../../components/Article/Article';

import './TopNews.scss';

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
        <div className="TopNews">
            <h1 className="TopNews-title">Top news from {LANG[language.toUpperCase()].long}</h1>
            <div className="TopNews-articles">
                {
                    articles.data.map((article, index) => (
                        <Article
                            key={`article-${index}`}
                            title={article.title}
                            img={article.urlToImage}
                            description={article.description}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default TopNews;