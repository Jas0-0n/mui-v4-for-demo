import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

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
  tabContent: {
    padding: theme.spacing(3),
  },
}));

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} role="tabpanel">
      {value === index && <Box className="tabContent">{children}</Box>}
    </div>
  );
}

function TabsDemo() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [iconValue, setIconValue] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Tabs</Typography>

      {/* Basic Tabs */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Basic Tabs</Typography>
          <AppBar position="static" color="default">
            <Tabs value={value} onChange={(e, v) => setValue(v)} indicatorColor="primary" textColor="primary">
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Typography>Item One Content &mdash; This is the first tab panel.</Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography>Item Two Content &mdash; This is the second tab panel.</Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography>Item Three Content &mdash; This is the third tab panel.</Typography>
          </TabPanel>
        </Paper>
      </div>

      {/* Icon Tabs */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Tabs with Icons</Typography>
          <AppBar position="static" color="default">
            <Tabs value={iconValue} onChange={(e, v) => setIconValue(v)} indicatorColor="primary" textColor="primary">
              <Tab icon={<PhoneIcon />} label="RECENTS" />
              <Tab icon={<FavoriteIcon />} label="FAVORITES" />
              <Tab icon={<PersonPinIcon />} label="NEARBY" />
            </Tabs>
          </AppBar>
          <TabPanel value={iconValue} index={0}>
            <Typography>Recents Content</Typography>
          </TabPanel>
          <TabPanel value={iconValue} index={1}>
            <Typography>Favorites Content</Typography>
          </TabPanel>
          <TabPanel value={iconValue} index={2}>
            <Typography>Nearby Content</Typography>
          </TabPanel>
        </Paper>
      </div>

      {/* Scrollable Tabs */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Scrollable Tabs</Typography>
          <AppBar position="static" color="default">
            <Tabs
              value={scrollValue}
              onChange={(e, v) => setScrollValue(v)}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="primary"
              textColor="primary"
            >
              {['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5', 'Tab 6', 'Tab 7', 'Tab 8', 'Tab 9', 'Tab 10'].map(
                (label) => <Tab key={label} label={label} />
              )}
            </Tabs>
          </AppBar>
        </Paper>
      </div>

      {/* Full Width Tabs */}
      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Full Width Tabs</Typography>
          <AppBar position="static" color="default">
            <Tabs value={value} onChange={(e, v) => setValue(v)} variant="fullWidth" indicatorColor="primary" textColor="primary">
              <Tab label="Tab One" />
              <Tab label="Tab Two" />
              <Tab label="Tab Three" />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Typography>Full width tab one content.</Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography>Full width tab two content.</Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography>Full width tab three content.</Typography>
          </TabPanel>
        </Paper>
      </div>
    </div>
  );
}

export default TabsDemo;