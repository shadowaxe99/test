frontend/src/components/CollaborativeFeatures.js:
```javascript
import React from 'react';
import DiscussionBoard from './DiscussionBoard';
import ChatRoom from './ChatRoom';
import Forum from './Forum';

const CollaborativeFeatures = () => {
  return (
    <div>
      <h2>Collaborative Features</h2>
      <DiscussionBoard />
      <ChatRoom />
      <Forum />
    </div>
  );
};

export default CollaborativeFeatures;
```

Please note that the code generated above assumes that you have already implemented the `DiscussionBoard`, `ChatRoom`, and `Forum` components.