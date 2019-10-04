import React from 'react';
import './App.css';
import Users from './components/Users';
import SearchBar from './components/SearchBar';
import GithubState from './context/github/GithubState';



function App() {

  return (
    <GithubState>
          <div className="container">
        <SearchBar   />
        <Users />
        </div>
    </GithubState>
  );
}

export default App;
