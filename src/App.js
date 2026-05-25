import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import GridOnIcon from '@material-ui/icons/GridOn';
import TableChartIcon from '@material-ui/icons/TableChart';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TabIcon from '@material-ui/icons/Tab';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TuneIcon from '@material-ui/icons/Tune';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LabelIcon from '@material-ui/icons/Label';
import LayersIcon from '@material-ui/icons/Layers';
import ListIcon from '@material-ui/icons/List';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HomeIcon from '@material-ui/icons/Home';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BuildIcon from '@material-ui/icons/Build';

import Dashboard from './components/pages/Dashboard';
import ButtonsDemo from './components/pages/ButtonsDemo';
import TypographyDemo from './components/pages/TypographyDemo';
import TextFieldDemo from './components/pages/TextFieldDemo';
import GridDemo from './components/pages/GridDemo';
import TableDemo from './components/pages/TableDemo';
import CardDemo from './components/pages/CardDemo';
import DialogDemo from './components/pages/DialogDemo';
import IconsDemo from './components/pages/IconsDemo';
import SnackbarDemo from './components/pages/SnackbarDemo';
import TabsDemo from './components/pages/TabsDemo';
import SelectMenuDemo from './components/pages/SelectMenuDemo';
import SelectionControlsDemo from './components/pages/SelectionControlsDemo';
import SliderDemo from './components/pages/SliderDemo';
import ProgressDemo from './components/pages/ProgressDemo';
import ChipBadgeAvatarDemo from './components/pages/ChipBadgeAvatarDemo';
import PaperContainerDemo from './components/pages/PaperContainerDemo';
import ListDemo from './components/pages/ListDemo';
import TooltipDemo from './components/pages/TooltipDemo';
import Playground from './components/pages/Playground';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  },
  title: {
    flexGrow: 1,
  },
  activeItem: {
    backgroundColor: theme.palette.action.selected,
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  },
}));

const menuItems = [
  { text: 'Dashboard', icon: <HomeIcon />, component: 'dashboard' },
  { text: 'Playground', icon: <BuildIcon />, component: 'playground' },
  { text: 'Buttons', icon: <TouchAppIcon />, component: 'buttons' },
  { text: 'Typography', icon: <TextFieldsIcon />, component: 'typography' },
  { text: 'TextField', icon: <ChatBubbleOutlineIcon />, component: 'textfield' },
  { text: 'Grid', icon: <GridOnIcon />, component: 'grid' },
  { text: 'Table', icon: <TableChartIcon />, component: 'table' },
  { text: 'Card', icon: <CardGiftcardIcon />, component: 'card' },
  { text: 'Dialog', icon: <CropOriginalIcon />, component: 'dialog' },
  { text: 'Icons', icon: <InsertEmoticonIcon />, component: 'icons' },
  { text: 'Snackbar', icon: <NotificationsIcon />, component: 'snackbar' },
  { text: 'Tabs', icon: <TabIcon />, component: 'tabs' },
  { text: 'Select / Menu', icon: <ArrowDropDownCircleIcon />, component: 'select' },
  { text: 'Checkbox / Radio / Switch', icon: <CheckBoxIcon />, component: 'selection' },
  { text: 'Slider', icon: <TuneIcon />, component: 'slider' },
  { text: 'Progress', icon: <TrendingUpIcon />, component: 'progress' },
  { text: 'Chip / Badge / Avatar', icon: <LabelIcon />, component: 'chip' },
  { text: 'Paper / Container', icon: <LayersIcon />, component: 'paper' },
  { text: 'List', icon: <ListIcon />, component: 'list' },
  { text: 'Tooltip', icon: <HelpOutlineIcon />, component: 'tooltip' },
  { text: 'AppBar / Drawer', icon: <ViewCompactIcon />, component: 'nav' },
];

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return <Dashboard onNavigate={setActivePage} />;
      case 'playground': return <Playground />;
      case 'buttons': return <ButtonsDemo />;
      case 'typography': return <TypographyDemo />;
      case 'textfield': return <TextFieldDemo />;
      case 'grid': return <GridDemo />;
      case 'table': return <TableDemo />;
      case 'card': return <CardDemo />;
      case 'dialog': return <DialogDemo />;
      case 'icons': return <IconsDemo />;
      case 'snackbar': return <SnackbarDemo />;
      case 'tabs': return <TabsDemo />;
      case 'select': return <SelectMenuDemo />;
      case 'selection': return <SelectionControlsDemo />;
      case 'slider': return <SliderDemo />;
      case 'progress': return <ProgressDemo />;
      case 'chip': return <ChipBadgeAvatarDemo />;
      case 'paper': return <PaperContainerDemo />;
      case 'list': return <ListDemo />;
      case 'tooltip': return <TooltipDemo />;
      case 'nav': return (
        <Typography variant="body1" paragraph>
          The current page itself is the AppBar + Drawer navigation demo. The top AppBar
          and the side Drawer menu are both Material UI components. On mobile screens,
          the Drawer becomes a temporary drawer opened via the hamburger menu icon.
        </Typography>
      );
      default: return <Dashboard />;
    }
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Toolbar>
          <Typography variant="h6" noWrap style={{ fontWeight: 700 }}>
            MUI v4 Demo
          </Typography>
        </Toolbar>
      </div>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => {
              setActivePage(item.component);
              setMobileOpen(false);
            }}
            className={activePage === item.component ? classes.activeItem : ''}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const currentTitle = menuItems.find(
    (item) => item.component === activePage
  )?.text || 'Dashboard';

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            {currentTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {renderPage()}
      </main>
    </div>
  );
}

export default App;