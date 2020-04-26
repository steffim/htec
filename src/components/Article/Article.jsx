import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Article.scss';

const propTypes = {
    articleUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
    description: PropTypes.string,
    classNames: PropTypes.string
};

const defaultProps = {
    classNames: '',
    urlToImage: '',
    description: ''
};

function Article({ articleUrl, classNames, title, urlToImage, description }) {
    return (
        <div className={`Article ${classNames}`}>
            <h2 className="Article-title">{title}</h2>
            {(urlToImage && urlToImage !== '') && <img className="Article-img" src={urlToImage} alt={title} />}
            {(description && description !== '') && <p className="Article-description">{ description }</p>}
            <Link to={articleUrl}><span className="Article-more">More ></span></Link>
        </div>
    );
}

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default React.memo(Article);