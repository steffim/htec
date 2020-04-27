import * as Actions from '../constants/actionTypes'
import { PAGES, CATEGORIES } from '../constants/constants';

const setLanguage = (state, language) => ({
    ...state,
    language,
    topNews: {
        ...state.topNews,
        data: {},
        updatedAt: null
    },
    categories: Object.keys(CATEGORIES).reduce((acc, category) => {
        acc[category] = {
            loading: false,
            data: {},
            updatedAt: null
        };

        return acc;
    }, {}),
    search: {
        loading: false,
        data: {}
    }
});

const setPage = (state, page) => ({
    ...state,
    selectedPage: page
});

// fetch top news
const fetchTopNewsStarted = (state) => ({
    ...state,
    topNews: {
        ...state.articles,
        loading: true,
        data: {}
    }
});

const fetchTopNewsFinished = (state, { articles, updatedAt }) => ({
    ...state,
    topNews: {
        ...state.articles,
        loading: false,
        data: articles,
        updatedAt
    }
});

const fetchTopNewsFailed = (state) => ({
    ...state,
    topNews: {
        ...state.articles,
        loading: false
    }
});

// fetch top news by term
const fetchTopNewsByTermStarted = (state) => ({
    ...state,
    search: {
        ...state.search,
        loading: true,
        data: {}
    }
});

const fetchTopNewsByTermFinished = (state, { articles }) => ({
    ...state,
    search: {
        ...state.search,
        loading: false,
        data: articles
    }
});

const fetchTopNewsByTermFailed = (state) => ({
    ...state,
    search: {
        ...state.search,
        loading: false,
        data: {}
    }
});

const selectArticle = (state, articleId) => ({
    ...state,
    selectedPage: PAGES.article.id,
    selectedArticle: state.topNews.data[articleId]
});

const fetchNewsByCategoryStarted = (state, category) => ({
    ...state,
    categories: {
        ...state.categories,
        [category]: {
            ...state.categories[category],
            loading: true,
            data: {}
        }
    }
});

const fetchNewsByCategoryFinished = (state, { category, articles, updatedAt }) => ({
    ...state,
    categories: {
        ...state.categories,
        [category]: {
            ...state.categories[category],
            loading: false,
            data: articles,
            updatedAt
        }
    }
});

const fetchNewsByCategoryFailed = (state, category) => ({
    ...state,
    categories: {
        ...state.categories,
        [category]: {
            ...state.categories[category],
            loading: true
        }
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
            return fetchTopNewsFinished(state, action);
        case Actions.FETCH_TOP_NEWS_FAILED:
            return fetchTopNewsFailed(state);

        case Actions.FETCH_TOP_NEWS_BY_TERM_STARTED:
            return fetchTopNewsByTermStarted(state);
        case Actions.FETCH_TOP_NEWS_BY_TERM_FINISHED:
            return fetchTopNewsByTermFinished(state, action);
        case Actions.FETCH_TOP_NEWS_BY_TERM_FAILED:
            return fetchTopNewsByTermFailed(state);

        case Actions.SELECT_ARTICLE:
            return selectArticle(state, action.article);

        case Actions.FETCH_NEWS_BY_CATEGORY_STARTED:
            return fetchNewsByCategoryStarted(state, action.category);
        case Actions.FETCH_NEWS_BY_CATEGORY_FINISHED:
            return fetchNewsByCategoryFinished(state, action);
        case Actions.FETCH_NEWS_BY_CATEGORY_FAILED:
            return fetchNewsByCategoryFailed(state, action.category);

        default:
            return state;
    }
};