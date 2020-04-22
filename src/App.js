import React from 'react';
import ContentComponent from './components/ContentComponent';
import { LANG, PAGES } from './constants/constants';
import { GlobalStateProvider } from './helpers/useGlobalState';
import reducer from './reducers/reducers'

import './App.scss';
import Header from './components/Header/Header';

const initialState = {
  language: LANG.US.short,
  selectedPage: PAGES.topNews.id,
  articles: {
    loading: false,
    data: []
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
