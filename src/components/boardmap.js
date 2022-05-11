import React from 'react';

const Boardmap = (props) => {
    return (
        <section className={'boardmap-item ' + props.roleCss}>
            {props.isKiller ? 'X' : '' }
        </section>
    )
}

export default Boardmap