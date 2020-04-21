import React from 'react';
import './App.css';
import ContentComponent from './components/ContentComponent';
import { LANG, PAGES } from './constants/constants';
import { GlobalStateProvider } from './helpers/useGlobalState';
import reducer from './reducers/reducers'
import Navigation from './components/Navigation';

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
      <Navigation />
      <ContentComponent />
    </GlobalStateProvider>
  );
}

export default App;
