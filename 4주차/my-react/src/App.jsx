import React from 'react';
import PersonalCard from './PersonalCard';

const user = {
  name: 'John Doe',
  age: 30,
  job: 'Software Engineer'
};

const App = () => {
  return (
    <div style={styles.container}>
      <PersonalCard initialName={user.name} initialAge={user.age} initialJob={user.job} />
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
