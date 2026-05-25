import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LanguageIcon from '@material-ui/icons/Language';
import AlarmIcon from '@material-ui/icons/Alarm';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PrintIcon from '@material-ui/icons/Print';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

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
  iconBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  iconLabel: {
    marginTop: theme.spacing(1),
    fontSize: '0.75rem',
    color: theme.palette.text.secondary,
  },
}));

const icons = [
  { icon: <AddIcon />, label: 'Add' },
  { icon: <DeleteIcon />, label: 'Delete' },
  { icon: <EditIcon />, label: 'Edit' },
  { icon: <SaveIcon />, label: 'Save' },
  { icon: <HomeIcon />, label: 'Home' },
  { icon: <PersonIcon />, label: 'Person' },
  { icon: <SettingsIcon />, label: 'Settings' },
  { icon: <SearchIcon />, label: 'Search' },
  { icon: <EmailIcon />, label: 'Email' },
  { icon: <PhoneIcon />, label: 'Phone' },
  { icon: <CloudUploadIcon />, label: 'Upload' },
  { icon: <FavoriteIcon />, label: 'Favorite' },
  { icon: <ShareIcon />, label: 'Share' },
  { icon: <StarIcon />, label: 'Star' },
  { icon: <NotificationsIcon />, label: 'Notifications' },
  { icon: <LockIcon />, label: 'Lock' },
  { icon: <VisibilityIcon />, label: 'Visibility' },
  { icon: <VisibilityOffIcon />, label: 'Visibility Off' },
  { icon: <LanguageIcon />, label: 'Language' },
  { icon: <AlarmIcon />, label: 'Alarm' },
  { icon: <FileCopyIcon />, label: 'Copy' },
  { icon: <PrintIcon />, label: 'Print' },
  { icon: <PhotoCameraIcon />, label: 'Camera' },
];

function IconsDemo() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" gutterBottom>Icons</Typography>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>
            Material Icons (24 samples)
          </Typography>
          <Grid container spacing={1}>
            {icons.map((item) => (
              <Grid item xs={4} sm={3} md={2} lg={2} key={item.label}>
                <Box className={classes.iconBox}>
                  {React.cloneElement(item.icon, {
                    color: 'primary',
                    fontSize: 'large',
                  })}
                  <Typography className={classes.iconLabel}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </div>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Icon Colors</Typography>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Box p={2} textAlign="center">
              <StarIcon fontSize="large" color="inherit" />
              <Typography variant="caption" display="block">inherit</Typography>
            </Box>
            <Box p={2} textAlign="center">
              <StarIcon fontSize="large" color="primary" />
              <Typography variant="caption" display="block">primary</Typography>
            </Box>
            <Box p={2} textAlign="center">
              <StarIcon fontSize="large" color="secondary" />
              <Typography variant="caption" display="block">secondary</Typography>
            </Box>
            <Box p={2} textAlign="center">
              <StarIcon fontSize="large" color="action" />
              <Typography variant="caption" display="block">action</Typography>
            </Box>
            <Box p={2} textAlign="center">
              <StarIcon fontSize="large" color="disabled" />
              <Typography variant="caption" display="block">disabled</Typography>
            </Box>
            <Box p={2} textAlign="center">
              <StarIcon fontSize="large" color="error" />
              <Typography variant="caption" display="block">error</Typography>
            </Box>
          </Box>
        </Paper>
      </div>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Icon Sizes</Typography>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Box p={2} textAlign="center">
              <FavoriteIcon fontSize="small" color="secondary" />
              <Typography variant="caption" display="block">small</Typography>
            </Box>
            <Box p={2} textAlign="center">
              <FavoriteIcon color="secondary" />
              <Typography variant="caption" display="block">default</Typography>
            </Box>
            <Box p={2} textAlign="center">
              <FavoriteIcon fontSize="large" color="secondary" />
              <Typography variant="caption" display="block">large</Typography>
            </Box>
          </Box>
        </Paper>
      </div>
    </div>
  );
}

export default IconsDemo;