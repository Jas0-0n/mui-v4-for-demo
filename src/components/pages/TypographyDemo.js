import React from 'react';
import Typography from '@material-ui/core/Typography';
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
}));

function TypographyDemo() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" gutterBottom>Typography</Typography>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Headings</Typography>
          <Typography variant="h1" gutterBottom>h1. Heading</Typography>
          <Typography variant="h2" gutterBottom>h2. Heading</Typography>
          <Typography variant="h3" gutterBottom>h3. Heading</Typography>
          <Typography variant="h4" gutterBottom>h4. Heading</Typography>
          <Typography variant="h5" gutterBottom>h5. Heading</Typography>
          <Typography variant="h6" gutterBottom>h6. Heading</Typography>
        </Paper>
      </div>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Subtitles</Typography>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
        </Paper>
      </div>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Body Text</Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Paper>
      </div>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Text Styles</Typography>
          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography>
        </Paper>
      </div>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Text Alignment</Typography>
          <Box mb={1}>
            <Typography variant="body1" align="left">Left aligned text</Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="body1" align="center">Center aligned text</Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="body1" align="right">Right aligned text</Typography>
          </Box>
        </Paper>
      </div>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Colors</Typography>
          <Typography variant="body1" color="primary" gutterBottom>Primary color text</Typography>
          <Typography variant="body1" color="secondary" gutterBottom>Secondary color text</Typography>
          <Typography variant="body1" color="textPrimary" gutterBottom>Text primary color</Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>Text secondary color</Typography>
          <Typography variant="body1" color="error" gutterBottom>Error color text</Typography>
        </Paper>
      </div>
    </div>
  );
}

export default TypographyDemo;