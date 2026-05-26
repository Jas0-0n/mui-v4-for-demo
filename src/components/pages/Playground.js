import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import BuildIcon from "@material-ui/icons/Build";

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
    row: {
        display: "flex",
        flexWrap: "wrap",
        gap: theme.spacing(2),
        alignItems: "center",
    },
}));

function Playground() {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                <BuildIcon style={{ marginRight: 8, verticalAlign: "middle" }} />
                Playground
            </Typography>

            <Typography variant="body2" color="textSecondary" paragraph>
                Use this page to experiment with highly customized Material-UI components. Start
                from the examples below or replace them with your own.
            </Typography>

            <div className={classes.section}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.subtitle}>
                        Customized Button
                    </Typography>
                    <Box className={classes.row}>
                        <Button variant="contained" color="primary">
                            Default
                        </Button>
                    </Box>
                </Paper>
            </div>

            <div className={classes.section}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.subtitle}>
                        Customized TextField
                    </Typography>
                    <Box className={classes.row}>
                        <TextField label="Outlined" variant="outlined" />
                        <TextField label="Filled" variant="filled" />
                        <TextField label="Standard" variant="standard" />
                    </Box>
                </Paper>
            </div>

            <div className={classes.section}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.subtitle}>
                        Customized Slider
                    </Typography>
                    <Box style={{ padding: "0 16px", maxWidth: 400 }}>
                        <Slider defaultValue={30} />
                    </Box>
                </Paper>
            </div>
        </div>
    );
}

export default Playground;
