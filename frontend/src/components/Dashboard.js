frontend/src/components/Dashboard.js:
```javascript
import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import AtAGlance from './AtAGlance';
import Widgets from './Widgets';
import Search from './Search';
import Profiles from './Profiles';
import UserSupport from './UserSupport';
import ResponsiveDesign from './ResponsiveDesign';
import RealTimeUpdates from './RealTimeUpdates';
import ProgressTracking from './ProgressTracking';
import MultiLanguageSupport from './MultiLanguageSupport';
import CollaborativeFeatures from './CollaborativeFeatures';
import Onboarding from './Onboarding';
import Accessibility from './Accessibility';

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Navigation />
      <h1>Welcome, {user.name}!</h1>
      <AtAGlance />
      <Widgets />
      <Search />
      <Profiles />
      <UserSupport />
      <ResponsiveDesign />
      <RealTimeUpdates />
      <ProgressTracking />
      <MultiLanguageSupport />
      <CollaborativeFeatures />
      <Onboarding />
      <Accessibility />
    </div>
  );
};

export default Dashboard;
```