import React from 'react';

import './Article.scss';

function Article({ title, img, description }) {
    return (
        <div className="Article">
            <h2 className="Article-title">{ title }</h2>
            <img className="Article-img" src={img} loading="lazy" alt={title} />
            <p className="Article-description">{ description }</p>
        </div>
    );
}

export default Article;