import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
  demoPaper: {
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  elevatedRow: {
    display: 'flex',
    gap: theme.spacing(2),
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  elevationBox: {
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function PaperContainerDemo() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" gutterBottom>Paper / Container</Typography>

      {/* Paper Elevations */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Paper Elevations</Typography>
          <Box className={classes.elevatedRow}>
            {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
              <Box key={elevation} textAlign="center">
                <Paper elevation={elevation} className={classes.elevationBox}>
                  <Typography variant="caption">
                    {elevation}
                  </Typography>
                </Paper>
                <Typography variant="caption" display="block" style={{ marginTop: 4 }}>
                  e={elevation}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </div>

      {/* Paper Variants */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Paper Variants</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.demoPaper} elevation={1}>
                <Typography variant="body1">Elevation 1</Typography>
                <Typography variant="body2" color="textSecondary">
                  Default paper component
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.demoPaper} variant="outlined">
                <Typography variant="body1">Outlined</Typography>
                <Typography variant="body2" color="textSecondary">
                  Outlined variant without shadow
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.demoPaper} variant="outlined" square>
                <Typography variant="body1">Square</Typography>
                <Typography variant="body2" color="textSecondary">
                  Square corners (no border radius)
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>

      {/* Container */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Container</Typography>

          <Box mb={3}>
            <Typography variant="body2" gutterBottom>
              Container with maxWidth=&quot;sm&quot;:
            </Typography>
            <Container maxWidth="sm">
              <Paper className={classes.demoPaper} elevation={2}>
                <Typography variant="body1">
                  maxWidth=sm (600px)
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  This container is centered and has a maximum width of 600px.
                </Typography>
              </Paper>
            </Container>
          </Box>

          <Box mb={3}>
            <Typography variant="body2" gutterBottom>
              Container with maxWidth=&quot;md&quot;:
            </Typography>
            <Container maxWidth="md">
              <Paper className={classes.demoPaper} elevation={2}>
                <Typography variant="body1">
                  maxWidth=md (960px)
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  This container has a maximum width of 960px.
                </Typography>
              </Paper>
            </Container>
          </Box>

          <Box>
            <Typography variant="body2" gutterBottom>
              Container fixed (not fluid):
            </Typography>
            <Container fixed>
              <Paper className={classes.demoPaper} elevation={2}>
                <Typography variant="body1">
                  Fixed Container
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  This container has fixed max-widths per breakpoint instead of fluidly expanding.
                </Typography>
              </Paper>
            </Container>
          </Box>
        </Paper>
      </div>
    </div>
  );
}

export default PaperContainerDemo;