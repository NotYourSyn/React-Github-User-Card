import React from 'react';


const Card = props => {

    return (
        <div className='card'>
            <img src={props.profile.avatar_url} width='550px' height='550px' alt={`${props.profile.name}'s avatar`}/>
            <div className='card-info'>
                <p><strong>Username:</strong> {props.profile.login}</p>
                <p><strong>Followers:</strong> {props.profile.followers}</p>
                <p><strong>Following:</strong> {props.profile.following}</p>
            </div>
        </div>
    )
}

export default Card;
