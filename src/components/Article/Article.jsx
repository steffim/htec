import React from 'react';

import './Article.scss';
import { useGlobalState } from '../../helpers/useGlobalState';
import { selectArticle } from '../../actions/actions';

function Article({ article }) {
    const [,dispatch] = useGlobalState();
    const { title, urlToImage, description } = article;

    function onMoreClick() {
        dispatch(selectArticle(article));
    }

    return (
        <div className="Article">
            <h2 className="Article-title">{ title }</h2>
            <img className="Article-img" src={urlToImage} loading="lazy" alt={title} />
            <p className="Article-description">{ description }</p>
            <span className="Article-more" onClick={onMoreClick}>More ></span>
        </div>
    );
}

export default React.memo(Article);