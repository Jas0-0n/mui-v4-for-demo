import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

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
  card: {
    maxWidth: 345,
    margin: 'auto',
  },
  media: {
    height: 140,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function CardDemo() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" gutterBottom>Card</Typography>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Basic Card</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/345x140/1976d2/ffffff?text=Material+UI"
                  title="Material UI"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                    ranging across all continents except Antarctica.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">Share</Button>
                  <Button size="small" color="primary">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://via.placeholder.com/345x140/dc004e/ffffff?text=Clickable"
                    title="Clickable Card"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Clickable Card
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      This entire card is clickable. Click anywhere on it to trigger an action.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">Action</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Media Card
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    This card has a header section with avatar and more options icon.
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <IconButton aria-label="previous">
                    <SkipPreviousIcon />
                  </IconButton>
                  <IconButton aria-label="play/pause">
                    <PlayArrowIcon className={classes.playIcon} />
                  </IconButton>
                  <IconButton aria-label="next">
                    <SkipNextIcon />
                  </IconButton>
                </div>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="more" style={{ marginLeft: 'auto' }}>
                    <MoreVertIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </div>

      <div className={classes.section}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.subtitle}>Outlined Card</Typography>
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Outlined Card
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This card uses the outlined variant instead of elevation.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">Learn More</Button>
            </CardActions>
          </Card>
        </Paper>
      </div>
    </div>
  );
}

export default CardDemo;