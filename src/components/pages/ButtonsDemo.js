import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  buttonRow: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  subtitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
}));

function ButtonsDemo() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" gutterBottom>Buttons</Typography>

      {/* Contained Buttons */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Contained Buttons</Typography>
          <Box className={classes.buttonRow}>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" disabled>Disabled</Button>
            <Button variant="contained" color="primary" href="#contained">Link</Button>
          </Box>
        </Paper>
      </div>

      {/* Text Buttons */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Text Buttons</Typography>
          <Box className={classes.buttonRow}>
            <Button>Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button disabled>Disabled</Button>
            <Button color="primary" href="#text">Link</Button>
          </Box>
        </Paper>
      </div>

      {/* Outlined Buttons */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Outlined Buttons</Typography>
          <Box className={classes.buttonRow}>
            <Button variant="outlined">Default</Button>
            <Button variant="outlined" color="primary">Primary</Button>
            <Button variant="outlined" color="secondary">Secondary</Button>
            <Button variant="outlined" disabled>Disabled</Button>
            <Button variant="outlined" color="primary" href="#outlined">Link</Button>
          </Box>
        </Paper>
      </div>

      {/* Buttons with Icons */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Buttons with Icons</Typography>
          <Box className={classes.buttonRow}>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
              Save
            </Button>
            <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
            <Button variant="contained" color="default" startIcon={<CloudUploadIcon />}>
              Upload
            </Button>
          </Box>
        </Paper>
      </div>

      {/* Icon Buttons */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Icon Buttons</Typography>
          <Box className={classes.buttonRow}>
            <Tooltip title="Add to shopping cart" leaveDelay={500}>
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete" leaveDelay={500}>
              <IconButton color="secondary" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Alarm" leaveDelay={500}>
              <IconButton aria-label="alarm">
                <AlarmIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Upload" leaveDelay={500}>
              <IconButton color="primary" disabled aria-label="upload">
                <CloudUploadIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Paper>
      </div>

      {/* Button Sizes */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Button Sizes</Typography>
          <Box className={classes.buttonRow}>
            <Button variant="contained" color="primary" size="small">Small</Button>
            <Button variant="contained" color="primary" size="medium">Medium</Button>
            <Button variant="contained" color="primary" size="large">Large</Button>
          </Box>
        </Paper>
      </div>

      {/* Button Group */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Button Group</Typography>
          <Box className={classes.buttonRow}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Box>
        </Paper>
      </div>
    </div>
  );
}

export default ButtonsDemo;