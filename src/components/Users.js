import React,{useContext} from 'react';
import UserCard from './UserCard';
import GithubContext from '../context/github/githubContext';

function Users() {
   const githubcontext = useContext(GithubContext);
   const {users} = githubcontext;
   
    return (
        
        <div className="template">
            {users.map(user => <UserCard key={user.id} user={user}/>)}
           
        </div>
    )
}

export default Users
