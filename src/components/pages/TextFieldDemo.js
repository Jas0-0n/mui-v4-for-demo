import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
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
  textField: {
    margin: theme.spacing(1),
  },
}));

function TextFieldDemo() {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [multiline, setMultiline] = useState('');

  return (
    <div>
      <Typography variant="h4" gutterBottom>Text Field</Typography>

      {/* Basic Text Fields */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Basic Text Fields</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Standard"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Filled"
                variant="filled"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Outlined"
                variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Disabled"
                value="Disabled value"
                disabled
                fullWidth
              />
            </Grid>
          </Grid>
        </Paper>
      </div>

      {/* Form Fields */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Form Fields</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText="Enter your email address"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                helperText="Enter your password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Number"
                type="number"
                InputLabelProps={{ shrink: true }}
                helperText="Enter a number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
          </Grid>
        </Paper>
      </div>

      {/* Multiline Text Fields */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Multiline Text Fields</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Multiline"
                multiline
                rows={4}
                value={multiline}
                onChange={(e) => setMultiline(e.target.value)}
                helperText="Enter multiple lines of text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Textarea"
                multiline
                rows={2}
                variant="outlined"
                placeholder="Placeholder text"
                fullWidth
              />
            </Grid>
          </Grid>
        </Paper>
      </div>

      {/* Text Field Sizes */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Text Field Sizes</Typography>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <TextField
              label="Small"
              size="small"
              className={classes.textField}
            />
            <TextField
              label="Medium"
              size="medium"
              className={classes.textField}
            />
            <TextField
              label="Large"
              InputProps={{ style: { fontSize: '1.25rem' } }}
              className={classes.textField}
            />
          </Box>
        </Paper>
      </div>

      {/* Text Field with Icons */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Text Field with Icons</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="With helper text"
                helperText="Some important text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Error state"
                error
                helperText="Incorrect entry"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Required field"
                required
                helperText="This field is required"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="With placeholder"
                placeholder="Enter text here"
                fullWidth
              />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

export default TextFieldDemo;