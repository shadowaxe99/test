frontend/src/components/AtAGlance.js:
```javascript
import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid, Card, CardContent } from '@material-ui/core';

const AtAGlance = () => {
  const aiAgentCount = useSelector(state => state.aiAgent.count);
  const userCount = useSelector(state => state.user.count);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h6">AI Agents</Typography>
            <Typography variant="h4">{aiAgentCount}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Users</Typography>
            <Typography variant="h4">{userCount}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AtAGlance;
```

Remember to only return the code for the file frontend/src/components/AtAGlance.js.