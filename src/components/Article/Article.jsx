import React from 'react';
import PropTypes from 'prop-types';
import { useGlobalState } from '../../helpers/useGlobalState';
import { selectArticle } from '../../actions/actions';

import './Article.scss';

const propTypes = {
    id: PropTypes.number.isRequired,
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

function Article({ id, classNames, title, urlToImage, description }) {
    const [,dispatch] = useGlobalState();

    function onMoreClick() {
        dispatch(selectArticle(id));
    }
console.log('Article');
    return (
        <div className={`Article ${classNames}`}>
            <h2 className="Article-title">{title}</h2>
            {urlToImage !== '' && <img className="Article-img" src={urlToImage} alt={title} />}
            {description !== '' && <p className="Article-description">{ description }</p>}
            <span className="Article-more" onClick={onMoreClick}>More ></span>
        </div>
    );
}

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default React.memo(Article);