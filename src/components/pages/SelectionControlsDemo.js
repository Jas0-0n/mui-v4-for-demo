import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

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
}));

function SelectionControlsDemo() {
  const classes = useStyles();
  const [checkedA, setCheckedA] = useState(true);
  const [checkedB, setCheckedB] = useState(false);
  const [checkedC, setCheckedC] = useState(true);
  const [radioValue, setRadioValue] = useState('female');
  const [switchA, setSwitchA] = useState(true);
  const [switchB, setSwitchB] = useState(false);
  const [switchC, setSwitchC] = useState(false);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Checkbox / Radio / Switch</Typography>

      <Grid container spacing={3}>
        {/* Checkbox */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Checkbox</Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend">Assign responsibility</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={checkedA} onChange={(e) => setCheckedA(e.target.checked)} />}
                  label="Gilad Gray"
                />
                <FormControlLabel
                  control={<Checkbox checked={checkedB} onChange={(e) => setCheckedB(e.target.checked)} color="primary" />}
                  label="Jason Killian"
                />
                <FormControlLabel
                  control={<Checkbox checked={checkedC} onChange={(e) => setCheckedC(e.target.checked)} />}
                  label="Antoine Llorca"
                />
                <FormControlLabel
                  control={<Checkbox disabled />}
                  label="Disabled"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      color="secondary"
                    />
                  }
                  label="Custom icon"
                />
              </FormGroup>
            </FormControl>
          </Paper>
        </Grid>

        {/* Radio */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Radio</Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup value={radioValue} onChange={(e) => setRadioValue(e.target.value)}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                <FormControlLabel value="disabled" disabled control={<Radio />} label="Disabled" />
              </RadioGroup>
            </FormControl>
            <Box mt={2}>
              <RadioGroup row value={radioValue} onChange={(e) => setRadioValue(e.target.value)}>
                <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
              </RadioGroup>
            </Box>
          </Paper>
        </Grid>

        {/* Switch */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Switch</Typography>
            <Box display="flex" alignItems="center" flexWrap="wrap">
              <FormControlLabel
                control={<Switch checked={switchA} onChange={(e) => setSwitchA(e.target.checked)} color="primary" />}
                label="Primary"
              />
              <FormControlLabel
                control={<Switch checked={switchB} onChange={(e) => setSwitchB(e.target.checked)} color="secondary" />}
                label="Secondary"
              />
              <FormControlLabel
                control={<Switch checked={switchC} onChange={(e) => setSwitchC(e.target.checked)} />}
                label="Default"
              />
              <FormControlLabel
                control={<Switch disabled />}
                label="Disabled"
              />
              <FormControlLabel
                control={<Switch disabled checked />}
                label="Disabled checked"
              />
            </Box>
            <Box display="flex" alignItems="center" mt={2}>
              <FormControlLabel
                control={<Switch checked={switchA} onChange={(e) => setSwitchA(e.target.checked)} size="small" />}
                label="Small"
              />
              <FormControlLabel
                control={<Switch checked={switchB} onChange={(e) => setSwitchB(e.target.checked)} />}
                label="Medium"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default SelectionControlsDemo;