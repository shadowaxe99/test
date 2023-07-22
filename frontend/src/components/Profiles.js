frontend/src/components/Profiles.js:
```javascript
import React from 'react';
import { useSelector } from 'react-redux';

const Profiles = () => {
  const profiles = useSelector(state => state.profiles);

  return (
    <div>
      <h2>AI Agent Profiles</h2>
      {profiles.map(profile => (
        <div key={profile.id}>
          <h3>{profile.name}</h3>
          <p>Description: {profile.description}</p>
          <p>Skills: {profile.skills.join(', ')}</p>
          <p>Training History: {profile.trainingHistory}</p>
          <p>Achievements: {profile.achievements}</p>
          <p>Training Data: <a href={profile.trainingData}>Download</a></p>
          <p>Model Architecture: <a href={profile.modelArchitecture}>Download</a></p>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
```

Note: This code assumes that you have already set up Redux and have a `profiles` state in your Redux store. You can modify the code accordingly to match your specific implementation.