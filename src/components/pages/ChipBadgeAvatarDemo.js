import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';

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
  chipRow: {
    display: 'flex',
    gap: theme.spacing(1),
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
  badgeRow: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  avatarRow: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    flexWrap: 'wrap',
  },
  orange: {
    color: theme.palette.getContrastText('#ff9800'),
    backgroundColor: '#ff9800',
  },
  purple: {
    color: theme.palette.getContrastText('#9c27b0'),
    backgroundColor: '#9c27b0',
  },
  green: {
    color: '#fff',
    backgroundColor: '#4caf50',
  },
}));

function ChipBadgeAvatarDemo() {
  const classes = useStyles();
  const [chipData, setChipData] = useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Chip / Badge / Avatar</Typography>

      <Grid container spacing={3}>
        {/* Chip */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Chip</Typography>
            <Box mb={2}>
              <Typography variant="body2" gutterBottom>Basic Chips</Typography>
              <Box className={classes.chipRow}>
                <Chip label="Basic" />
                <Chip label="Primary" color="primary" />
                <Chip label="Secondary" color="secondary" />
                <Chip label="Disabled" disabled />
              </Box>
            </Box>
            <Box mb={2}>
              <Typography variant="body2" gutterBottom>Outlined Chips</Typography>
              <Box className={classes.chipRow}>
                <Chip label="Basic" variant="outlined" />
                <Chip label="Primary" color="primary" variant="outlined" />
                <Chip label="Secondary" color="secondary" variant="outlined" />
              </Box>
            </Box>
            <Box mb={2}>
              <Typography variant="body2" gutterBottom>Chips with Icons</Typography>
              <Box className={classes.chipRow}>
                <Chip icon={<FaceIcon />} label="With Icon" color="primary" />
                <Chip label="Clickable" color="primary" onClick={() => {}} />
                <Chip label="Deletable" onDelete={() => {}} color="secondary" />
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" gutterBottom>Deletable Chips (click to remove)</Typography>
              <Box className={classes.chipRow}>
                {chipData.map((data) => (
                  <Chip
                    key={data.key}
                    label={data.label}
                    onDelete={handleDelete(data)}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Badge */}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Badge</Typography>
            <Box className={classes.badgeRow}>
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
              <Badge badgeContent={10} color="secondary">
                <MailIcon />
              </Badge>
              <Badge badgeContent={100} max={99} color="primary">
                <MailIcon />
              </Badge>
              <Badge variant="dot" color="primary">
                <MailIcon />
              </Badge>
              <Badge variant="dot" color="secondary">
                <MailIcon />
              </Badge>
              <Badge color="secondary" badgeContent=" ">
                <MailIcon />
              </Badge>
            </Box>
            <Box mt={3}>
              <Typography variant="body2" gutterBottom>Badge on Text</Typography>
              <Box className={classes.badgeRow}>
                <Badge badgeContent={4} color="primary">
                  <Typography variant="body1">Mail</Typography>
                </Badge>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Avatar */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.subtitle}>Avatar</Typography>
            <Box mb={3}>
              <Typography variant="body2" gutterBottom>Image Avatars</Typography>
              <Box className={classes.avatarRow}>
                <Avatar alt="Remy Sharp" src="https://via.placeholder.com/40/1976d2/ffffff?text=R" />
                <Avatar alt="Travis Howard" src="https://via.placeholder.com/40/dc004e/ffffff?text=T" />
                <Avatar alt="Cindy Baker" src="https://via.placeholder.com/40/4caf50/ffffff?text=C" />
              </Box>
            </Box>
            <Box mb={3}>
              <Typography variant="body2" gutterBottom>Letter Avatars</Typography>
              <Box className={classes.avatarRow}>
                <Avatar className={classes.orange}>H</Avatar>
                <Avatar className={classes.purple}>N</Avatar>
                <Avatar className={classes.green}>OP</Avatar>
                <Avatar>UN</Avatar>
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" gutterBottom>Icon Avatars</Typography>
              <Box className={classes.avatarRow}>
                <Avatar>
                  <PersonIcon />
                </Avatar>
                <Avatar className={classes.orange}>
                  <FaceIcon />
                </Avatar>
                <Avatar className={classes.purple}>
                  <DoneIcon />
                </Avatar>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChipBadgeAvatarDemo;