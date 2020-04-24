import * as Actions from '../constants/actionTypes';

const setLanguage = (language) => ({
    type: Actions.SET_LANGUAGE,
    language
});

const setPage = (page) => ({
    type: Actions.SET_PAGE,
    page
});

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

const selectArticle = (article) => ({
    type: Actions.SELECT_ARTICLE,
    article
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

    selectArticle,

    fetchNewsByCategoryStarted,
    fetchNewsByCategoryFinished,
    fetchNewsByCategoryFailed
};