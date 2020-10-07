import React from 'react';
import Card from './Card';

const UserCards = (props) => {
    return(
        <div>
            <Card profile={props.gitCard}/>
        </div>
    )
}

export default UserCards;