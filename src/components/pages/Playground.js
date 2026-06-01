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
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import { ExpandMore, ChevronRight } from "@material-ui/icons";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
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
    tooltipBox: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        flexWrap: "wrap",
        marginTop: theme.spacing(1),
    },
    tableRowLv1: {
        backgroundColor: theme.palette.action.hover,
    },
    tableRowLv2: {
        backgroundColor: theme.palette.grey[50],
    },
    tableRowLv3: {
        backgroundColor: theme.palette.common.white,
    },
}));

const BOOLEAN_LABELS = {
    yes: "✓",
    no: "✗",
};

const INITIAL_TAXONOMY_DATA = [
    { id: 1, name: "數碼娛樂", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 100, children: [
        { id: 170, name: "數碼影音", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 101, children: [
            { id: 690, name: "耳機", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "yes", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 50 },
        ]},
    ]},
    { id: 142, name: "休閑娛樂", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "yes", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 9 },
    { id: 188, name: "藍牙喇叭", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "yes", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 3181 },
    { id: 6, name: "電子書閱讀機", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "yes", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 3147 },
    { id: 13, name: "耳棉", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "yes", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 3021 },
    { id: 265, name: "錄音筆", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "yes", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 2991 },
    { id: 164, name: "音樂播放器", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "yes", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 2951 },
    { id: 239, name: "收音機", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "yes", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 2926 },
    { id: 441, name: "遊戲", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "yes", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 0, sort: 8, children: [
        { id: 442, name: "主機遊戲", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "yes", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 0, sort: 81 },
        { id: 443, name: "遊戲周邊", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "yes", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 0, sort: 82 },
    ]},
    { id: 172, name: "穿戴式裝置", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "yes", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 7 },
    { id: 692, name: "Apple Watch", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "yes", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 6 },
    { id: 231, name: "數碼影像", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "yes", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 5 },
    { id: 680, name: "手機通訊", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 99 },
    { id: 44, name: "電腦", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 98 },
    { id: 23, name: "美容及護理儀器", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 97 },
    { id: 184, name: "生活電器", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 96 },
    { id: 185, name: "廚房電器", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "yes", removable: "no", priceLevel: 3, sort: 95 },
    { id: 230, name: "大型電器", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 94 },
    { id: 483, name: "護膚及美妝", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 93 },
    { id: 484, name: "保健及醫藥", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 92 },
    { id: 1161, name: "個人護理", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 0, sort: 91, children: [
        { id: 1162, name: "口腔護理", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 0, sort: 90 },
    ]},
    { id: 486, name: "母嬰", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 89 },
    { id: 485, name: "家居", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 88 },
    { id: 171, name: "生活時尚", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 87 },
    { id: 487, name: "寵物用品", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 84 },
    { id: 488, name: "葡萄酒及烈酒", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 83 },
    { id: 489, name: "玩具", productCount: 0, navigation: "yes", visible: "yes", autoUpdate: "no", thirdParty: "yes", marketPageOnly: "no", removable: "no", priceLevel: 3, sort: 82 },
];

const ACTION_LABELS = {
    page: "單頁設定",
    image: "圖片設定",
    attributes: "編輯產品屬性",
    transfer: "轉移產品",
    edit: "編輯",
    delete: "移除",
};

const CustomCategoryTable = () => {
    const [expandedIds, setExpandedIds] = useState(new Set());
    const [rows] = useState(INITIAL_TAXONOMY_DATA);

    const handleToggle = (nodeId) => {
        setExpandedIds((prev) => {
            const next = new Set(prev);
            if (next.has(nodeId)) next.delete(nodeId);
            else next.add(nodeId);
            return next;
        });
    };

    const renderActions = () => (
        <Box display="flex" flexWrap="wrap" gap={0.5}>
            {[
                ACTION_LABELS.page,
                ACTION_LABELS.image,
                ACTION_LABELS.attributes,
                ACTION_LABELS.transfer,
                ACTION_LABELS.edit,
                ACTION_LABELS.delete,
            ].map((label) => (
                <Chip key={label} size="small" label={label} clickable style={{ height: 24, fontSize: 11 }} />
            ))}
        </Box>
    );

    const renderRow = (row, depth) => {
        const hasChildren = row.children && row.children.length > 0;
        const isExpanded = expandedIds.has(row.id);
        const namePad = 8 + (depth - 1) * 32;

        return (
            <React.Fragment key={row.id}>
                <TableRow hover>
                    <TableCell style={{ paddingLeft: 8 }}>
                        {row.id}
                    </TableCell>
                    <TableCell style={{ paddingLeft: namePad }}>
                        {hasChildren ? (
                            <IconButton size="small" onClick={() => handleToggle(row.id)} style={{ color: "#1976d2", padding: 2, marginRight: 4 }}>
                                {isExpanded ? <ExpandMore style={{ fontSize: 18 }} /> : <ChevronRight style={{ fontSize: 18 }} />}
                            </IconButton>
                        ) : (
                            <span style={{ display: "inline-block", width: 24, marginRight: 4 }} />
                        )}
                        {row.name}
                    </TableCell>
                    <TableCell align="center">{row.productCount}</TableCell>
                    <TableCell align="center">
                        {row.navigation === "yes" ? <CheckIcon fontSize="small" style={{ color: "#00bfa5" }} /> : <CloseIcon fontSize="small" style={{ color: "#e94560" }} />}
                    </TableCell>
                    <TableCell align="center">
                        {row.visible === "yes" ? <CheckIcon fontSize="small" style={{ color: "#00bfa5" }} /> : <CloseIcon fontSize="small" style={{ color: "#e94560" }} />}
                    </TableCell>
                    <TableCell align="center">
                        {row.autoUpdate === "yes" ? <CheckIcon fontSize="small" style={{ color: "#00bfa5" }} /> : <CloseIcon fontSize="small" style={{ color: "#e94560" }} />}
                    </TableCell>
                    <TableCell align="center">
                        {row.thirdParty === "yes" ? <CheckIcon fontSize="small" style={{ color: "#00bfa5" }} /> : <CloseIcon fontSize="small" style={{ color: "#e94560" }} />}
                    </TableCell>
                    <TableCell align="center">
                        {row.marketPageOnly === "yes" ? <CheckIcon fontSize="small" style={{ color: "#00bfa5" }} /> : <CloseIcon fontSize="small" style={{ color: "#e94560" }} />}
                    </TableCell>
                    <TableCell align="center">
                        {row.removable === "yes" ? <CheckIcon fontSize="small" style={{ color: "#00bfa5" }} /> : <CloseIcon fontSize="small" style={{ color: "#e94560" }} />}
                    </TableCell>
                    <TableCell align="center">{row.priceLevel}</TableCell>
                    <TableCell align="center">{row.sort}</TableCell>
                    <TableCell>{renderActions()}</TableCell>
                </TableRow>
                {isExpanded && hasChildren ? row.children.map((child) => renderRow(child, depth + 1)) : null}
            </React.Fragment>
        );
    };

    return (
        <TableContainer component={Paper} elevation={0}>
            <Table size="small" aria-label="customized category table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: 72 }} align="center">編號</TableCell>
                        <TableCell style={{ minWidth: 160 }}>分類名稱</TableCell>
                        <TableCell style={{ width: 100 }} align="center">產品數量</TableCell>
                        <TableCell style={{ width: 100 }} align="center">導航欄</TableCell>
                        <TableCell style={{ width: 100 }} align="center">是否顯示</TableCell>
                        <TableCell style={{ width: 120 }} align="center">是否自動更新</TableCell>
                        <TableCell style={{ width: 140 }} align="center">容許第三方商戶使用</TableCell>
                        <TableCell style={{ width: 120 }} align="center">是否只使用市單</TableCell>
                        <TableCell style={{ width: 100 }} align="center">可除emor</TableCell>
                        <TableCell style={{ width: 100 }} align="center">價格分級</TableCell>
                        <TableCell style={{ width: 80 }} align="center">排序</TableCell>
                        <TableCell style={{ minWidth: 280 }}>操作</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => renderRow(row, 1))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

function Playground() {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                <BuildIcon style={{ marginRight: 8, verticalAlign: "middle" }} />
                Playground
            </Typography>

            <Typography variant="body2" color="textSecondary" paragraph>
                Use this page to experiment with highly customized Material-UI components.
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

            <div className={classes.section}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.subtitle}>
                        Customize Table
                    </Typography>
                    <CustomCategoryTable />
                </Paper>
            </div>
        </div>
    );
}

export default Playground;
