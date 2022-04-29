import React from 'react';
import Header from './components/Header.Jsx';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skill from './components/Skills';


const App = () => {
  return (
    <div>
      <Header />
      <Education />
      <WorkExperience />
      <Skill />
    </div>
  );
};

export default App;