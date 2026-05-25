import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
  list: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListDemo() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" gutterBottom>List</Typography>

      <Grid container spacing={3}>
        {/* Simple List */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Simple List</Typography>
            <List className={classes.list}>
              <ListItem>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* List with Icons */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>List with Icons</Typography>
            <List className={classes.list}>
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Documents" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="Email" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="Phone" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* List with Avatars */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>List with Avatars</Typography>
            <List className={classes.list}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Doe" secondary="Software Engineer" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Jane Smith" secondary="Product Manager" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Bob Johnson" secondary="Designer" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* List with Secondary Actions */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>List with Secondary Actions</Typography>
            <List className={classes.list}>
              <ListItem>
                <ListItemIcon>
                  <StarBorderIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Location" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* List with Checkboxes */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>List with Checkboxes</Typography>
            <List className={classes.list}>
              {[0, 1, 2, 3].map((value) => (
                <ListItem key={value} dense button>
                  <ListItemIcon>
                    <Checkbox edge="start" tabIndex={-1} disableRipple />
                  </ListItemIcon>
                  <ListItemText primary={`Line item ${value + 1}`} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* List with Subheader */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>List with Subheader</Typography>
            <List
              className={classes.list}
              subheader={
                <ListSubheader component="div">
                  User Settings
                </ListSubheader>
              }
            >
              <ListItem>
                <ListItemText primary="Account" secondary="Manage your account settings" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Privacy" secondary="Control your privacy settings" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Notifications" secondary="Manage notification preferences" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ListDemo;