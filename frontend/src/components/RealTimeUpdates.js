frontend/src/components/RealTimeUpdates.js:

```javascript
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeToUpdates, unsubscribeFromUpdates } from '../redux/actions';

const RealTimeUpdates = () => {
  const dispatch = useDispatch();
  const updates = useSelector(state => state.updates);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if (isSubscribed) {
      dispatch(subscribeToUpdates());
    } else {
      dispatch(unsubscribeFromUpdates());
    }
  }, [dispatch, isSubscribed]);

  const handleToggleSubscription = () => {
    setIsSubscribed(prevState => !prevState);
  };

  return (
    <div>
      <h2>Real-Time Updates</h2>
      <button onClick={handleToggleSubscription}>
        {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
      {isSubscribed && (
        <div>
          <h3>New Updates:</h3>
          <ul>
            {updates.map((update, index) => (
              <li key={index}>{update}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RealTimeUpdates;
```

Please note that this code assumes you have already implemented the necessary Redux actions and reducers for handling real-time updates. The `subscribeToUpdates` and `unsubscribeFromUpdates` actions should be dispatched to start and stop receiving updates from the server. The `updates` state should be an array that stores the received updates.