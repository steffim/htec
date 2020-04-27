import React from 'react';
import PropTypes from 'prop-types';
import useMedia from '../../helpers/useMedia';

import './Grid.scss';

const propTypes = {
    items: PropTypes.array.isRequired,
    classNames: PropTypes.string,
    columns: PropTypes.number,
    columnGap: PropTypes.string,
    rowGap: PropTypes.string
};

const defaultProps = {
    classNames: '',
    columns: 3,
    columnGap: '2rem',
    rowGap: '2rem'
}

function Grid({ items, classNames, columns, columnGap, rowGap }) {
    let columnsNumber = columns;
    const phone = useMedia('(max-width: 576px)');
    const tablet = useMedia('(min-width: 577px) and (max-width: 768px)');

    if (phone) {
        columnsNumber = 1;
    } else if (tablet) {
        columnsNumber = 2;
    }

    const style = {
        gridTemplateColumns: `repeat(${columnsNumber}, 1fr)`,
        columnGap,
        rowGap
    };

    return (
        <div className={`Grid ${classNames}`} style={style}>
            {items}
        </div>
    );
}

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;