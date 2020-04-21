import * as Actions from '../constants/actionTypes'

const setLanguage = (state, language) => ({
    ...state,
    language
});

const setPage = (state, page) => ({
    ...state,
    selectedPage: page
});

const fetchTopNewsStarted = (state) => ({
    ...state,
    articles: {
        ...state.articles,
        loading: true
    }
});

const fetchTopNewsFinished = (state, articles) => ({
    ...state,
    articles: {
        ...state.articles,
        loading: false,
        data: articles
    }
});

const fetchTopNewsFailed = (state) => ({
    ...state,
    articles: {
        ...state.articles,
        loading: false
    }
});

export default function reducer(state, action) {
    switch(action.type) {
        case Actions.SET_LANGUAGE:
            return setLanguage(state, action.language);
        case Actions.SET_PAGE:
            return setPage(state, action.page);
        case Actions.FETCH_TOP_NEWS_STARTED:
            return fetchTopNewsStarted(state);
        case Actions.FETCH_TOP_NEWS_FINISHED:
            return fetchTopNewsFinished(state, action.articles);
        case Actions.FETCH_TOP_NEWS_FAILED:
            return fetchTopNewsFailed(state);
        default:
            return state;
    }
};