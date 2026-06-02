import React from "react";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import MailIcon from "@material-ui/icons/Mail";
import Zoom from "@material-ui/core/Zoom";
import Fade from "@material-ui/core/Fade";

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
    tooltipBox: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        flexWrap: "wrap",
        marginTop: theme.spacing(1),
    },
}));

function TooltipDemo() {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Tooltip
            </Typography>

            {/* Tooltip with Badge */}
            <div className={classes.section}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.subtitle}>
                        Tooltip with Badge
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                        Use a <code>Badge</code> to show a count in the top-right corner while the
                        tooltip remains on hover.
                    </Typography>
                    <Box className={classes.tooltipBox}>
                        {/* 采购订单 */}
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
                                            style={{ color: "#fff", textDecoration: "underline" }}
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
                            leaveDelay={2000}
                        >
                            <Badge badgeContent={1} color="primary" overlap="rectangle">
                                <Button variant="outlined">采购订单</Button>
                            </Badge>
                        </Tooltip>

                        {/* 睇位PO记录 */}
                        <Tooltip
                            title={
                                <Box p={0.5}>
                                    {/* <Typography variant="subtitle2" gutterBottom>
                                        [安裝服務]
                                    </Typography> */}
                                    <Typography variant="body2" gutterBottom>
                                        <a
                                            href="https://example.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: "#fff", textDecoration: "underline" }}
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
                                            style={{ color: "#fff", textDecoration: "underline" }}
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
                            leaveDelay={2000}
                        >
                            <Badge badgeContent={2} color="primary" overlap="rectangle">
                                <Button variant="outlined">PO睇位记录</Button>
                            </Badge>
                        </Tooltip>

                        {/* 睇位PO公司 */}
                        {/* <Tooltip
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
                                            style={{ color: "#fff", textDecoration: "underline" }}
                                        >
                                            PO260522073
                                        </a>
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
                                            style={{ color: "#fff", textDecoration: "underline" }}
                                        >
                                            PO260412016
                                        </a>
                                    </Typography>
                                    <Typography variant="body2">
                                        師傅上門睇位服務 (適用於抽油煙機)
                                    </Typography>
                                </Box>
                            }
                            arrow
                            interactive
                            leaveDelay={2000}
                        >
                            <Badge badgeContent={2} color="primary" overlap="rectangle">
                                <Button variant="outlined">睇位PO公司</Button>
                            </Badge>
                        </Tooltip> */}
                    </Box>
                </Paper>
            </div>

            {/* Copyable Tooltips — interactive + leaveDelay */}
            <div className={classes.section}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.subtitle}>
                        Copyable Tooltips (interactive + leaveDelay)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                        Default tooltips disappear the moment the cursor leaves the trigger element.
                        Adding <code>interactive</code> keeps the tooltip open while hovering over
                        it, and <code>leaveDelay</code> gives you time to move the cursor from the
                        trigger to the tooltip. You can now select and copy the text.
                    </Typography>
                    <Box className={classes.tooltipBox}>
                        <Tooltip
                            title={
                                <Box p={0.5}>
                                    <Typography variant="subtitle2" gutterBottom>
                                        [安裝服務]
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        PO260522073
                                    </Typography>
                                    <Typography variant="body2">
                                        德國上將 Giggas 熱水爐 付費睇位服務
                                        (睇位費由師傅即場收取現金$100，如經代理成功安裝可退回)
                                    </Typography>
                                    <br />
                                    <Typography variant="body2" gutterBottom>
                                        PO260412016
                                    </Typography>
                                    <Typography variant="body2">
                                        師傅上門睇位服務 (適用於抽油煙機)
                                    </Typography>
                                </Box>
                            }
                            arrow
                            interactive
                            leaveDelay={2000}
                        >
                            <Button variant="contained" color="primary">
                                采购订单
                            </Button>
                        </Tooltip>
                        <Tooltip
                            title={
                                <Box p={0.5}>
                                    <Typography variant="subtitle2" gutterBottom>
                                        [安裝服務]
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        PO260522073
                                    </Typography>
                                    <Typography variant="body2">
                                        德國上將 Giggas 熱水爐 付費睇位服務
                                        (睇位費由師傅即場收取現金$100，如經代理成功安裝可退回)
                                    </Typography>
                                    <br />
                                    <Typography variant="body2" gutterBottom>
                                        PO260412016
                                    </Typography>
                                    <Typography variant="body2">
                                        師傅上門睇位服務 (適用於抽油煙機)
                                    </Typography>
                                </Box>
                            }
                            arrow
                            interactive
                            leaveDelay={2000}
                        >
                            <Button variant="contained" color="secondary">
                                Copy API key
                            </Button>
                        </Tooltip>
                        <Tooltip
                            title={
                                <Box p={0.5}>
                                    <Typography variant="subtitle2" gutterBottom>
                                        [安裝服務]
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        PO260522073
                                    </Typography>
                                    <Typography variant="body2">
                                        德國上將 Giggas 熱水爐 付費睇位服務
                                        (睇位費由師傅即場收取現金$100，如經代理成功安裝可退回)
                                    </Typography>
                                    <br />
                                    <Typography variant="body2" gutterBottom>
                                        PO260412016
                                    </Typography>
                                    <Typography variant="body2">
                                        師傅上門睇位服務 (適用於抽油煙機)
                                    </Typography>
                                </Box>
                            }
                            arrow
                            interactive
                            leaveDelay={2000}
                        >
                            <Button variant="outlined">[安裝服務]</Button>
                        </Tooltip>
                    </Box>
                </Paper>
            </div>
        </div>
    );
}

export default TooltipDemo;
