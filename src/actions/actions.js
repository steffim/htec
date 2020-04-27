import * as Actions from '../constants/actionTypes';

const setLanguage = (language) => ({
    type: Actions.SET_LANGUAGE,
    language
});

const setPage = (page) => ({
    type: Actions.SET_PAGE,
    page
});

// fetch top news
const fetchTopNewsStarted = () => ({
    type: Actions.FETCH_TOP_NEWS_STARTED
});

const fetchTopNewsFinished = (articles, updatedAt) => ({
    type: Actions.FETCH_TOP_NEWS_FINISHED,
    articles,
    updatedAt
});

const fetchTopNewsFailed = () => ({
    type: Actions.FETCH_TOP_NEWS_FAILED
});

// fetch top news by term
const fetchTopNewsByTermStarted = () => ({
    type: Actions.FETCH_TOP_NEWS_BY_TERM_STARTED
});

const fetchTopNewsByTermFinished = (articles) => ({
    type: Actions.FETCH_TOP_NEWS_BY_TERM_FINISHED,
    articles
});

const fetchTopNewsByTermFailed = () => ({
    type: Actions.FETCH_TOP_NEWS_BY_TERM_FAILED
});

const fetchNewsByCategoryStarted = (category) => ({
    type: Actions.FETCH_NEWS_BY_CATEGORY_STARTED,
    category
});

const fetchNewsByCategoryFinished = (category, articles, updatedAt) => ({
    type: Actions.FETCH_NEWS_BY_CATEGORY_FINISHED,
    category,
    articles,
    updatedAt
});

const fetchNewsByCategoryFailed = (category) => ({
    type: Actions.FETCH_NEWS_BY_CATEGORY_FAILED,
    category
});

export {
    setLanguage,
    setPage,

    fetchTopNewsStarted,
    fetchTopNewsFinished,
    fetchTopNewsFailed,

    fetchTopNewsByTermStarted,
    fetchTopNewsByTermFinished,
    fetchTopNewsByTermFailed,

    fetchNewsByCategoryStarted,
    fetchNewsByCategoryFinished,
    fetchNewsByCategoryFailed
};