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

const fetchTopNewsFinished = (articles) => ({
    type: Actions.FETCH_TOP_NEWS_FINISHED,
    articles
});

const fetchTopNewsFailed = () => ({
    type: Actions.FETCH_TOP_NEWS_FAILED
});

const selectArticle = (article) => ({
    type: Actions.SELECT_ARTICLE,
    article
});

export {
    setLanguage,
    setPage,

    fetchTopNewsStarted,
    fetchTopNewsFinished,
    fetchTopNewsFailed,

    selectArticle
};