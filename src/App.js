import React from 'react';
import ContentComponent from './components/ContentComponent';
import Header from './components/Header/Header';
import { LANG, PAGES } from './constants/constants';
import { GlobalStateProvider } from './helpers/useGlobalState';
import reducer from './reducers/reducers'

import './App.scss';

const initialState = {
    language: LANG.US.short,
    selectedPage: PAGES.topNews.id,
    topNews: {
        loading: false,
        data: {},
        updatedAt: null
    },
    categories: {
        business: {
            loading: false,
            data: {},
            updatedAt: null
        },
        entertainment: {
            loading: false,
            data: {},
            updatedAt: null
        },
        general: {
            loading: false,
            data: {},
            updatedAt: null
        },
        health: {
            loading: false,
            data: {},
            updatedAt: null
        },
        science: {
            loading: false,
            data: {},
            updatedAt: null
        },
        sports: {
            loading: false,
            data: {},
            updatedAt: null
        },
        technology: {
            loading: false,
            data: {},
            updatedAt: null
        }
    }
};

function App() {
    return (
        <GlobalStateProvider initialState={initialState} reducer={reducer}>
            <Header />
            <ContentComponent />
        </GlobalStateProvider>
    );
}

export default App;
