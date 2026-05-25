import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

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
  sliderContainer: {
    padding: theme.spacing(0, 2),
  },
}));

function SliderDemo() {
  const classes = useStyles();
  const [value, setValue] = useState(30);
  const [range, setRange] = useState([20, 37]);
  const [verticalValue, setVerticalValue] = useState(30);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Slider</Typography>

      <Grid container spacing={3}>
        {/* Basic Slider */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Basic Slider</Typography>
            <Box className={classes.sliderContainer}>
              <Slider value={value} onChange={(e, v) => setValue(v)} />
              <Typography variant="body2" color="textSecondary" align="center">
                Value: {value}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Slider with Steps */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Slider with Steps</Typography>
            <Box className={classes.sliderContainer}>
              <Slider
                defaultValue={30}
                step={10}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
              />
            </Box>
          </Paper>
        </Grid>

        {/* Range Slider */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Range Slider</Typography>
            <Box className={classes.sliderContainer}>
              <Slider
                value={range}
                onChange={(e, v) => setRange(v)}
                valueLabelDisplay="auto"
              />
              <Typography variant="body2" color="textSecondary" align="center">
                Range: {range[0]} - {range[1]}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Slider with Icons */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Slider with Icons</Typography>
            <Box display="flex" alignItems="center" className={classes.sliderContainer}>
              <VolumeDown />
              <Slider value={value} onChange={(e, v) => setValue(v)} style={{ margin: '0 16px' }} />
              <VolumeUp />
            </Box>
          </Paper>
        </Grid>

        {/* Disabled Slider */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Disabled Slider</Typography>
            <Box className={classes.sliderContainer}>
              <Slider disabled defaultValue={30} />
            </Box>
          </Paper>
        </Grid>

        {/* Vertical Slider */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Vertical Slider</Typography>
            <Box display="flex" justifyContent="center" height={200}>
              <Slider
                orientation="vertical"
                value={verticalValue}
                onChange={(e, v) => setVerticalValue(v)}
                valueLabelDisplay="auto"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default SliderDemo;