import React from 'react';
import PersonalCard from './PersonalCard';

const user = {
  name: '이승환',
  age: 23,
  job: 'Software Engineer'
};

const App = () => {
  return (
    <div style={styles.container}>
      <PersonalCard name={user.name} age={user.age} job={user.job} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  }
};

export default App;
