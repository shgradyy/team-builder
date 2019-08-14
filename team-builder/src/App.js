import React, { useState, } from 'react';
import MemberForms from './components/MemberForm';
import teamMembers from './components/teamMembers';


import './App.css';

function App() {
  const [members, setMembers] = useState([]);

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <MemberForm /> 
      <teamMembers /> 
    </div>
  );
}

export default App;
