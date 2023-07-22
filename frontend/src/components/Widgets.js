frontend/src/components/Widgets.js:
```javascript
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';

const Widgets = () => {
  const widgets = useSelector(state => state.widgets);

  return (
    <Grid container spacing={3}>
      {widgets.map(widget => (
        <Grid item key={widget.id} xs={12} sm={6} md={4} lg={3}>
          <div className="widget">
            <Typography variant="h6">{widget.title}</Typography>
            <Typography variant="body1">{widget.content}</Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Widgets;
```

Note: This code assumes that you have already set up Redux and have a `widgets` state in your Redux store. The `widgets` state should be an array of objects, where each object represents a widget with properties like `id`, `title`, and `content`.