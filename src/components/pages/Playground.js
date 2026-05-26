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
import Tooltip from "@material-ui/core/Tooltip";
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
    tooltipBox: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        flexWrap: "wrap",
        marginTop: theme.spacing(1),
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
                        Customized Tooltip With Badge
                    </Typography>
                    <Box className={classes.row}>
                        <div className={classes.section}>
                            <Paper className={classes.paper}>
                                <Typography variant="h6" className={classes.subtitle}>
                                    Tooltip with Badge
                                </Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    Use a <code>Badge</code> to show a count in the top-right corner
                                    while the tooltip remains on hover.
                                </Typography>
                                <Box className={classes.tooltipBox}>
                                    <Tooltip
                                        title={
                                            <Box p={0.5}>
                                                <Typography variant="subtitle2" gutterBottom>
                                                    [安裝服務]
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    <a
                                                        href="https://example.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            color: "#fff",
                                                            textDecoration: "underline",
                                                        }}
                                                    >
                                                        PO260525036
                                                    </a>
                                                </Typography>
                                                <Typography variant="body2">
                                                    Hoi Yee Electrical Co (Installation)
                                                </Typography>
                                            </Box>
                                        }
                                        arrow
                                        interactive
                                        leaveDelay={3000}
                                    >
                                        <Badge badgeContent={1} color="primary" overlap="rectangle">
                                            <Button variant="outlined">采购订单</Button>
                                        </Badge>
                                    </Tooltip>

                                    <Tooltip
                                        title={
                                            <Box p={0.5}>
                                                <Typography variant="body2" gutterBottom>
                                                    <a
                                                        href="https://example.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            color: "#fff",
                                                            textDecoration: "underline",
                                                        }}
                                                    >
                                                        PO260522073
                                                    </a>
                                                    {" - World Engineering Ltd."}
                                                </Typography>
                                                <Typography variant="body2">
                                                    德國上將 Giggas 熱水爐 付費睇位服務
                                                    (睇位費由師傅即場收取現金$100，如經代理成功安裝可退回)
                                                </Typography>

                                                <br />
                                                <Typography variant="body2" gutterBottom>
                                                    <a
                                                        href="https://example.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            color: "#fff",
                                                            textDecoration: "underline",
                                                        }}
                                                    >
                                                        PO260412016
                                                    </a>
                                                    {" - Jingjun Home Appliance Company Ltd."}
                                                </Typography>
                                                <Typography variant="body2">
                                                    師傅上門睇位服務 (適用於抽油煙機)
                                                </Typography>
                                            </Box>
                                        }
                                        arrow
                                        interactive
                                        leaveDelay={3000}
                                    >
                                        <Badge badgeContent={2} color="primary" overlap="rectangle">
                                            <Button variant="outlined">PO睇位记录</Button>
                                        </Badge>
                                    </Tooltip>
                                </Box>
                            </Paper>
                        </div>
                    </Box>
                </Paper>
            </div>
        </div>
    );
}

export default Playground;
