import React from 'react';


const Card = props => {

    return (
        <div>
            <img src={props.profile.avatar_url} width='150px' height='150px' alt={`${props.profile.name}'s avatar`}/>
            <div>
                <p><strong>Username:</strong> {props.profile.login}</p>
                <p><strong>Followers:</strong> {props.profile.followers}</p>
                <p><strong>Following:</strong> {props.profile.following}</p>
            </div>
        </div>
    )
}

export default Card;
