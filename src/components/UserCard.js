import React from 'react';

function UserCard({user}) {
    return (
        <div className="card">
           <a className="btn"  href={user.html_url}> <h3>{user.login}</h3> </a>
            <img src={user.avatar_url} style={{width:'100px'}} alt="user"></img>
        </div>
    )
}

export default UserCard;
