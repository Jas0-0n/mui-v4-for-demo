import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  buttonRow: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function SnackbarDemo() {
  const classes = useStyles();
  const [openSimple, setOpenSimple] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openWithAction, setOpenWithAction] = useState(false);

  const handleClose = (setter) => (event, reason) => {
    if (reason === 'clickaway') return;
    setter(false);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Snackbar</Typography>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Simple Snackbar</Typography>
          <Box className={classes.buttonRow}>
            <Button variant="outlined" onClick={() => setOpenSimple(true)}>
              Open simple snackbar
            </Button>
          </Box>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={openSimple}
            autoHideDuration={3000}
            onClose={handleClose(setOpenSimple)}
            message="Note archived"
            action={
              <IconButton size="small" color="inherit" onClick={handleClose(setOpenSimple)}>
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
        </Paper>
      </div>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Alert Variants (Success / Error / Warning / Info)</Typography>
          <Box className={classes.buttonRow}>
            <Button variant="contained" style={{ backgroundColor: '#4caf50', color: '#fff' }} onClick={() => setOpenSuccess(true)}>
              Success
            </Button>
            <Button variant="contained" color="secondary" onClick={() => setOpenError(true)}>
              Error
            </Button>
            <Button variant="contained" style={{ backgroundColor: '#ff9800', color: '#fff' }} onClick={() => setOpenWarning(true)}>
              Warning
            </Button>
            <Button variant="contained" color="primary" onClick={() => setOpenInfo(true)}>
              Info
            </Button>
          </Box>
          <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleClose(setOpenSuccess)}>
            <Alert onClose={handleClose(setOpenSuccess)} severity="success">This is a success message!</Alert>
          </Snackbar>
          <Snackbar open={openError} autoHideDuration={3000} onClose={handleClose(setOpenError)}>
            <Alert onClose={handleClose(setOpenError)} severity="error">This is an error message!</Alert>
          </Snackbar>
          <Snackbar open={openWarning} autoHideDuration={3000} onClose={handleClose(setOpenWarning)}>
            <Alert onClose={handleClose(setOpenWarning)} severity="warning">This is a warning message!</Alert>
          </Snackbar>
          <Snackbar open={openInfo} autoHideDuration={3000} onClose={handleClose(setOpenInfo)}>
            <Alert onClose={handleClose(setOpenInfo)} severity="info">This is an info message!</Alert>
          </Snackbar>
        </Paper>
      </div>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Snackbar with Action</Typography>
          <Box className={classes.buttonRow}>
            <Button variant="outlined" color="primary" onClick={() => setOpenWithAction(true)}>
              Open with action
            </Button>
          </Box>
          <Snackbar
            open={openWithAction}
            autoHideDuration={5000}
            onClose={handleClose(setOpenWithAction)}
            message="File deleted successfully"
            action={
              <>
                <Button color="secondary" size="small" onClick={handleClose(setOpenWithAction)}>
                  UNDO
                </Button>
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose(setOpenWithAction)}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </>
            }
          />
        </Paper>
      </div>
    </div>
  );
}

export default SnackbarDemo;