import React, { useState, } from 'react';
import MemberForms from './components/MemberForm';
import Members from './components/members';


import './App.css';

function App() {
  const [members, setMembers] = useState([]);

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <MemberForm /> //Build
      <Members /> //Build
    </div>
  );
}

export default App;
