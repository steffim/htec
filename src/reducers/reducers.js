import * as Actions from '../constants/actionTypes'
import { PAGES } from '../constants/constants';

const setLanguage = (state, language) => ({
    ...state,
    language,
    topNews: {
        ...state.topNews,
        data: {},
        updatedAt: null
    }
});

const setPage = (state, page) => ({
    ...state,
    selectedPage: page
});

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

const fetchNewsByCategoryFinished = (state, { category, articles, updatedAt }) => {
    console.log(articles);
    return {
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
}
};

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

        case Actions.SELECT_ARTICLE:
            return selectArticle(state, action.article);

        case Actions.FETCH_NEWS_BY_CATEGORY_STARTED:
            return fetchNewsByCategoryStarted(state);
        case Actions.FETCH_NEWS_BY_CATEGORY_FINISHED:
            return fetchNewsByCategoryFinished(state, action);
        case Actions.FETCH_NEWS_BY_CATEGORY_FAILED:
            return fetchNewsByCategoryFailed(state);

        default:
            return state;
    }
};