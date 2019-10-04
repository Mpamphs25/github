import React,{useState,useContext} from 'react';
import GithubContext from '../context/github/githubContext';


function SearchBar() {
    const githubcontext = useContext(GithubContext);
    const [text,setText] =  useState('');
   
   const {callMeforOne,users,clearUser} = githubcontext;

    const onInputSearch = e =>{
        setText(e.target.value);
        
    }
    const onInputSubmit = e =>{
        e.preventDefault();
        if(text === ''){

        }else{
            
            callMeforOne(text);
             setText('');
        }
       
    }

    const onInputClick = () => {
        clearUser();
    }

    return (
        <form className="search" onSubmit={onInputSubmit}>
          
            <input type="text" placeholder="Search for GitHub users" onChange={onInputSearch} value={text}/>
            {
                users.length > 0  && <input type="submit" value='x' onClick={onInputClick} />
            }
      
        </form>
            
    )
}

export default SearchBar
