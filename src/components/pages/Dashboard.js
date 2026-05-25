import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  welcomePaper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    color: '#fff',
    marginBottom: theme.spacing(3),
  },
  featureTitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  chipContainer: {
    display: 'flex',
    gap: theme.spacing(1),
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
}));

function Dashboard({ onNavigate }) {
  const classes = useStyles();
  const components = [
    'AppBar / Drawer', 'Buttons', 'Card', 'Checkbox / Radio / Switch',
    'Chip / Badge / Avatar', 'Dialog', 'Grid', 'Icons', 'List',
    'Paper / Container', 'Progress', 'Select / Menu', 'Slider', 'Snackbar',
    'Tabs', 'Table', 'TextField', 'Tooltip', 'Typography',
  ];

  const stats = [
    { label: 'Demo Pages', value: '20+' },
    { label: 'Components', value: '40+' },
    { label: 'Material UI', value: 'v4' },
    { label: 'React', value: '18+' },
  ];

  const pageMapping = {
    Buttons: 'buttons',
    Typography: 'typography',
    TextField: 'textfield',
    Grid: 'grid',
    Table: 'table',
    Card: 'card',
    Dialog: 'dialog',
    Icons: 'icons',
    Snackbar: 'snackbar',
    Tabs: 'tabs',
    'Select / Menu': 'select',
    'Checkbox / Radio / Switch': 'selection',
    Slider: 'slider',
    Progress: 'progress',
    'Chip / Badge / Avatar': 'chip',
    'Paper / Container': 'paper',
    List: 'list',
    Tooltip: 'tooltip',
    'AppBar / Drawer': 'nav',
  };

  return (
    <div>
      <Paper className={classes.welcomePaper} elevation={3}>
        <Typography variant="h3" gutterBottom style={{ fontWeight: 700 }}>
          Material UI v4 Components
        </Typography>
        <Typography variant="h6" style={{ opacity: 0.9 }}>
          Interactive demo of core Material UI components built with React functional components &amp; hooks
        </Typography>
        <div className={classes.chipContainer}>
          {'@material-ui/core'.split().map((s) => (
            <Chip key={s} label={s} style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: '#fff' }} />
          ))}
        </div>
      </Paper>

      <Grid container spacing={3} style={{ marginBottom: 24 }}>
        {stats.map((stat) => (
          <Grid item xs={6} sm={3} key={stat.label}>
            <Paper className={classes.paper} elevation={2}>
              <Typography variant="h4" color="primary" style={{ fontWeight: 700 }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}>
        {components.map((name) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={name}>
            <Paper
              className={classes.paper}
              onClick={() => onNavigate && onNavigate(pageMapping[name])}
              style={{ cursor: 'pointer' }}
              elevation={3}
            >
              <Typography variant="body1" className={classes.featureTitle}>
                {name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Dashboard;