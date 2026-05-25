import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
  demoBox: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: theme.spacing(2),
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
  },
}));

function GridDemo() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" gutterBottom>Grid</Typography>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Auto Layout</Typography>
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5].map((n) => (
              <Grid item xs key={n}>
                <Box className={classes.demoBox}>xs</Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </div>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Responsive Grid</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Box className={classes.demoBox}>xs=12 sm=6 md=3</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className={classes.demoBox}>xs=12 sm=6 md=3</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className={classes.demoBox}>xs=12 sm=6 md=3</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className={classes.demoBox}>xs=12 sm=6 md=3</Box>
            </Grid>
          </Grid>
        </Paper>
      </div>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Mixed Layout</Typography>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box className={classes.demoBox}>xs=8</Box>
            </Grid>
            <Grid item xs={4}>
              <Box className={classes.demoBox}>xs=4</Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.demoBox}>xs=6</Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.demoBox}>xs=6</Box>
            </Grid>
          </Grid>
        </Paper>
      </div>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Spacing Variants</Typography>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((spacing) => (
            <Box key={spacing} mb={1}>
              <Typography variant="caption" display="block" gutterBottom>
                spacing={spacing}
              </Typography>
              <Grid container spacing={spacing}>
                <Grid item xs={4}>
                  <Box className={classes.demoBox}>Item</Box>
                </Grid>
                <Grid item xs={4}>
                  <Box className={classes.demoBox}>Item</Box>
                </Grid>
                <Grid item xs={4}>
                  <Box className={classes.demoBox}>Item</Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Paper>
      </div>
    </div>
  );
}

export default GridDemo;