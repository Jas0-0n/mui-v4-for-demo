import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
  buttonRow: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function DialogDemo() {
  const classes = useStyles();
  const [openAlert, setOpenAlert] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openFullScreen, setOpenFullScreen] = useState(false);

  // State for form dialog
  const [formEmail, setFormEmail] = useState('');

  return (
    <div>
      <Typography variant="h4" gutterBottom>Dialog</Typography>

      {/* Alert Dialog */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Alert Dialog</Typography>
          <Box className={classes.buttonRow}>
            <Button variant="outlined" color="primary" onClick={() => setOpenAlert(true)}>
              Open Alert Dialog
            </Button>
          </Box>
          <Dialog open={openAlert} onClose={() => setOpenAlert(false)}>
            <DialogTitle>Use Google&apos;s location service?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenAlert(false)} color="primary">Disagree</Button>
              <Button onClick={() => setOpenAlert(false)} color="primary" autoFocus>Agree</Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </div>

      {/* Confirmation Dialog */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Confirmation Dialog</Typography>
          <Box className={classes.buttonRow}>
            <Button variant="outlined" color="secondary" onClick={() => setOpenConfirm(true)}>
              Open Confirmation Dialog
            </Button>
          </Box>
          <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
            <DialogTitle>Delete Item</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this item? This action cannot be undone.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenConfirm(false)} color="primary">Cancel</Button>
              <Button onClick={() => setOpenConfirm(false)} color="secondary">Delete</Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </div>

      {/* Form Dialog */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Form Dialog</Typography>
          <Box className={classes.buttonRow}>
            <Button variant="outlined" color="primary" onClick={() => setOpenForm(true)}>
              Open Form Dialog
            </Button>
          </Box>
          <Dialog open={openForm} onClose={() => setOpenForm(false)}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                label="Email Address"
                type="email"
                fullWidth
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenForm(false)} color="primary">Cancel</Button>
              <Button onClick={() => setOpenForm(false)} color="primary">Subscribe</Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </div>

      {/* Full-screen Dialog */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Full-screen Dialog</Typography>
          <Box className={classes.buttonRow}>
            <Button variant="contained" color="primary" onClick={() => setOpenFullScreen(true)}>
              Open Full-screen Dialog
            </Button>
          </Box>
          <Dialog fullScreen open={openFullScreen} onClose={() => setOpenFullScreen(false)}>
            <DialogTitle>Full-screen Dialog</DialogTitle>
            <DialogContent>
              <DialogContentText>
                This dialog fills the entire screen. It is useful for complex forms
                or content that requires the user&apos;s full attention.
              </DialogContentText>
              <Box mt={2}>
                <Typography variant="body1" paragraph>
                  Full-screen dialogs are best suited for tasks like:
                </Typography>
                <ul>
                  <li>Creating a new record with lots of form fields</li>
                  <li>Detailed search/filter interfaces</li>
                  <li>Onboarding wizards</li>
                  <li>Multi-step confirmation flows</li>
                </ul>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenFullScreen(false)} color="primary">Cancel</Button>
              <Button onClick={() => setOpenFullScreen(false)} color="primary" autoFocus>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </div>
    </div>
  );
}

export default DialogDemo;