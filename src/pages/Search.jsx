import React from 'react';
import Page from '../components/Page/Page';
import { useGlobalState } from '../helpers/useGlobalState';
import { LANG } from '../constants/constants';

function Search() {
    const [{ language }] = useGlobalState();

    return (
        <Page title={`Search top news from ${LANG[language.toUpperCase()].long} by term:`}>
            Search
        </Page>
    );
}

export default Search;