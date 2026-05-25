import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
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
  progressBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: theme.spacing(2),
  },
  linearBox: {
    padding: theme.spacing(2),
  },
}));

function ProgressDemo() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" gutterBottom>Progress</Typography>

      {/* Circular Progress */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Circular Progress</Typography>
            <Box className={classes.progressBox}>
              <Box textAlign="center">
                <CircularProgress />
                <Typography variant="caption" display="block" style={{ marginTop: 8 }}>
                  Indeterminate
                </Typography>
              </Box>
              <Box textAlign="center">
                <CircularProgress variant="determinate" value={75} />
                <Typography variant="caption" display="block" style={{ marginTop: 8 }}>
                  75%
                </Typography>
              </Box>
              <Box textAlign="center">
                <CircularProgress color="secondary" />
                <Typography variant="caption" display="block" style={{ marginTop: 8 }}>
                  Secondary
                </Typography>
              </Box>
              <Box textAlign="center">
                <CircularProgress size={24} />
                <Typography variant="caption" display="block" style={{ marginTop: 8 }}>
                  Small
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Circular Progress with Label */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Circular Progress with Label</Typography>
            <Box className={classes.progressBox}>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={85} size={80} thickness={4} />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="caption" component="div" color="textSecondary">
                    85%
                  </Typography>
                </Box>
              </Box>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={50} size={80} thickness={4} color="secondary" />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="caption" component="div" color="textSecondary">
                    50%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Linear Progress */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Linear Progress</Typography>
            <Box className={classes.linearBox}>
              <Box mb={2}>
                <Typography variant="body2" gutterBottom>Indeterminate</Typography>
                <LinearProgress />
              </Box>
              <Box mb={2}>
                <Typography variant="body2" gutterBottom>Determinate (60%)</Typography>
                <LinearProgress variant="determinate" value={60} />
              </Box>
              <Box mb={2}>
                <Typography variant="body2" gutterBottom>Buffer</Typography>
                <LinearProgress variant="buffer" value={60} valueBuffer={80} />
              </Box>
              <Box mb={2}>
                <Typography variant="body2" gutterBottom>Query</Typography>
                <LinearProgress variant="query" />
              </Box>
              <Box mb={2}>
                <Typography variant="body2" gutterBottom>Secondary Color</Typography>
                <LinearProgress color="secondary" />
              </Box>
              <Box>
                <Typography variant="body2" gutterBottom>Determinate Secondary (30%)</Typography>
                <LinearProgress variant="determinate" value={30} color="secondary" />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProgressDemo;