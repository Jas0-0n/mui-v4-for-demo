import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
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
  formControl: {
    minWidth: 200,
  },
}));

function SelectMenuDemo() {
  const classes = useStyles();
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [multiple, setMultiple] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Select / Menu</Typography>

      {/* Basic Select */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Basic Select</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Age</InputLabel>
                <Select value={age} onChange={(e) => setAge(e.target.value)}>
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Country</InputLabel>
                <Select value={country} onChange={(e) => setCountry(e.target.value)}>
                  <MenuItem value="us">United States</MenuItem>
                  <MenuItem value="uk">United Kingdom</MenuItem>
                  <MenuItem value="jp">Japan</MenuItem>
                  <MenuItem value="cn">China</MenuItem>
                  <MenuItem value="de">Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </div>

      {/* Select Variants */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Select Variants</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <FormControl className={classes.formControl}>
                <InputLabel>Standard</InputLabel>
                <Select value={age} onChange={(e) => setAge(e.target.value)}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel>Filled</InputLabel>
                <Select value={age} onChange={(e) => setAge(e.target.value)}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Outlined</InputLabel>
                <Select value={age} onChange={(e) => setAge(e.target.value)}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </div>

      {/* Multiple Select */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Multiple Select</Typography>
          <FormControl className={classes.formControl}>
            <InputLabel>Tags</InputLabel>
            <Select
              multiple
              value={multiple}
              onChange={(e) => setMultiple(e.target.value)}
              renderValue={(selected) => selected.join(', ')}
            >
              {['React', 'Vue', 'Angular', 'Svelte', 'Ember'].map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Paper>
      </div>

      {/* Menu */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Dropdown Menu</Typography>
          <Button
            variant="contained"
            color="primary"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            Open Menu
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Paper>
      </div>
    </div>
  );
}

export default SelectMenuDemo;