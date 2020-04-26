import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { LANG, PAGES, CATEGORIES } from './constants/constants';
import { GlobalStateProvider } from './helpers/useGlobalState';
import reducer from './reducers/reducers';

import './App.scss';
import TopNews from './pages/TopNews/TopNews';
import Categories from './pages/Categories/Categories';
import Search from './pages/Search';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import Category from './pages/Category/Category';

const initialState = {
    language: LANG.US.short,
    selectedPage: PAGES.topNews.id,
    topNews: {
        loading: false,
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
};

function App() {
    return (
        <Router>
            <GlobalStateProvider initialState={initialState} reducer={reducer}>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <TopNews />
                    </Route>

                    <Route path="/topNews/:articleId">
                        <ArticlePage />
                    </Route>
                    <Route path="/topNews">
                        <TopNews />
                    </Route>
                
                    <Route path="/categories/:categoryId/:articleId">
                        <ArticlePage />
                    </Route>
                    <Route path="/categories/:categoryId">
                        <Category />
                    </Route>
                    <Route path="/categories">
                        <Categories />
                    </Route>
                    
                    <Route path="/search/:articleId">
                        <ArticlePage />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                    
                </Switch>
            </GlobalStateProvider>
        </Router>
    );
}

export default App;
