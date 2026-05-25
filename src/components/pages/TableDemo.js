import React, { useState, useMemo, useCallback } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { makeStyles } from "@material-ui/core/styles";
import ResizableTable from "../ResizableTable";

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
}));

function createData(name, calories, fat, carbs, protein, deliveryDate = "", deliveryTime = "上午") {
    return { name, calories, fat, carbs, protein, deliveryDate, deliveryTime };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "2026-05-25", "上午"),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "2026-05-26", "下午"),
    createData("Eclair", 262, 16.0, 24, 6.0, "2026-05-27", "晚上"),
    createData("Cupcake", 305, 3.7, 67, 4.3, "2026-05-28", "上午"),
    createData("Gingerbread", 356, 16.0, 49, 3.9, "2026-05-29", "下午"),
    createData("Jelly bean", 375, 0.0, 94, 0.0, "2026-05-30", "上午"),
    createData("Lollipop", 392, 0.2, 98, 0.0, "2026-06-01", "晚上"),
    createData("Honeycomb", 408, 3.2, 87, 6.5, "2026-06-02", "下午"),
    createData("Donut", 452, 25.0, 51, 4.9, "2026-06-03", "上午"),
    createData("KitKat", 518, 26.0, 65, 7.0, "2026-06-04", "晚上"),
];

// Shared column definitions — each column has id, label, alignment, and resize constraints
const columns = [
    { id: "name", label: "Dessert (100g serving)", minWidth: 150, maxWidth: 250, width: 220 },
    { id: "calories", label: "Calories", align: "right", minWidth: 80, maxWidth: 250, width: 100 },
    { id: "fat", label: "Fat (g)", align: "right", minWidth: 60, maxWidth: 250, width: 90 },
    { id: "carbs", label: "Carbs (g)", align: "right", minWidth: 80, maxWidth: 250, width: 100 },
    {
        id: "protein",
        label: "Protein (g)",
        align: "right",
        minWidth: 80,
        maxWidth: 150,
        width: 100,
    },
];

function DeliveryDateField({ value, onChange }) {
    const displayValue = value || "-";

    return (
        <label style={{ position: "relative", display: "block", width: "100%", cursor: "pointer" }}>
            <TextField
                value={displayValue}
                margin="dense"
                variant="outlined"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" style={{ marginRight: 4 }}>
                            <CalendarTodayIcon style={{ fontSize: 18 }} />
                        </InputAdornment>
                    ),
                    readOnly: true,
                    style: { paddingRight: 8 },
                }}
                inputProps={{ style: { paddingRight: 8 } }}
                style={{ width: "100%", marginBottom: 4 }}
            />
            <input
                type="date"
                value={value || ""}
                onChange={onChange}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                    border: "none",
                    margin: 0,
                    padding: 0,
                    zIndex: 2,
                    background: "transparent",
                }}
            />
        </label>
    );
}

function TableDemo() {
    const classes = useStyles();

    // Sorting state for the "Table with Sorting" section
    const [orderBy, setOrderBy] = useState("calories");
    const [order, setOrder] = useState("asc");

    const handleSort = (columnId) => {
        const isAsc = orderBy === columnId && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(columnId);
    };

    // Memoized sorted rows for the sorting table
    const sortedRows = useMemo(() => {
        const sorted = [...rows].slice(0, 5);
        sorted.sort((a, b) => {
            const aVal = a[orderBy];
            const bVal = b[orderBy];
            if (typeof aVal === "number") {
                return order === "asc" ? aVal - bVal : bVal - aVal;
            }
            return order === "asc"
                ? String(aVal).localeCompare(String(bVal))
                : String(bVal).localeCompare(String(aVal));
        });
        return sorted;
    }, [orderBy, order]);

    const [editableRows, setEditableRows] = useState(
        rows
            .slice(0, 5)
            .map((row, index) =>
                index === 0 ? { ...row, deliveryDate: "", deliveryTime: "" } : row,
            ),
    );

    const handleRowChange = useCallback(
        (rowName, field) => (event) => {
            const value = event.target.value;
            setEditableRows((prevRows) =>
                prevRows.map((row) => {
                    if (row.name === rowName) {
                        return { ...row, [field]: value };
                    }
                    return row;
                }),
            );
        },
        [],
    );

    const interactiveColumns = useMemo(
        () => [
            {
                id: "name",
                label: "Dessert (100g serving)",
                // minWidth: 150,
                // maxWidth: 400,
                width: 80,
            },
            {
                id: "deliveryDate",
                label: "预约送货日期",
                align: "left",
                // minWidth: 180,
                // maxWidth: 100,
                width: 50,
                render: (row) => (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            alignItems: "stretch",
                        }}
                    >
                        <DeliveryDateField
                            value={row.deliveryDate}
                            onChange={handleRowChange(row.name, "deliveryDate")}
                        />
                        <TextField
                            select
                            value={row.deliveryTime || ""}
                            onChange={handleRowChange(row.name, "deliveryTime")}
                            margin="dense"
                            variant="outlined"
                            style={{ minWidth: 30, width: "100%" }}
                            SelectProps={{ displayEmpty: true }}
                        >
                            <MenuItem value="">-</MenuItem>
                            {["上午", "下午", "晚上"].map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                ),
            },
            {
                id: "calories",
                label: "Calories",
                align: "right",
                minWidth: 80,
                maxWidth: 160,
                width: 100,
                render: (row) => (
                    <TextField
                        type="number"
                        value={row.calories}
                        onChange={handleRowChange(row.name, "calories")}
                        margin="dense"
                        inputProps={{ min: 0, style: { width: 80 } }}
                    />
                ),
            },
            {
                id: "fat",
                label: "Fat (g)",
                align: "right",
                minWidth: 60,
                maxWidth: 130,
                width: 90,
                render: (row) => (
                    <TextField
                        type="number"
                        value={row.fat}
                        onChange={handleRowChange(row.name, "fat")}
                        margin="dense"
                        inputProps={{ min: 0, style: { width: 65 } }}
                    />
                ),
            },
            {
                id: "carbs",
                label: "Carbs (g)",
                align: "right",
                minWidth: 80,
                maxWidth: 150,
                width: 100,
                render: (row) => (
                    <TextField
                        select
                        value={row.carbs}
                        onChange={handleRowChange(row.name, "carbs")}
                        margin="dense"
                        SelectProps={{ displayEmpty: true }}
                    >
                        {[12, 24, 37, 49, 51, 65, 67, 87, 94].map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                ),
            },
            {
                id: "protein",
                label: "Protein (g)",
                align: "right",
                minWidth: 80,
                maxWidth: 150,
                width: 100,
                render: (row) => (
                    <TextField
                        select
                        value={row.protein}
                        onChange={handleRowChange(row.name, "protein")}
                        margin="dense"
                        SelectProps={{ displayEmpty: true }}
                    >
                        {[0, 2.0, 3.9, 4.0, 4.3, 4.9, 6.0, 6.5, 7.0].map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                ),
            },
        ],
        [handleRowChange],
    );

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Table
            </Typography>

            {/* ── Basic Table ── */}
            <div className={classes.section}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.subtitle}>
                        Basic Table
                    </Typography>
                    <ResizableTable columns={columns} rows={rows} maxRows={5} />
                </Paper>
            </div>

            {/* ── Interactive Table with Embedded Controls ── */}
            <div className={classes.section}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.subtitle}>
                        Interactive Table with Embedded Controls
                    </Typography>
                    <Typography variant="body2" paragraph>
                        This table uses column-level `render` callbacks to embed input fields and
                        select menus.
                    </Typography>
                    <ResizableTable columns={interactiveColumns} rows={editableRows} />
                </Paper>
            </div>

            {/* ── Table with Sorting ── */}
            <div className={classes.section}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.subtitle}>
                        Table with Sorting
                    </Typography>
                    <ResizableTable
                        columns={columns}
                        rows={sortedRows}
                        sortable
                        onSort={handleSort}
                        orderBy={orderBy}
                        order={order}
                    />
                </Paper>
            </div>

            {/* ── Dense Table ── */}
            <div className={classes.section}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.subtitle}>
                        Dense Table
                    </Typography>
                    <ResizableTable columns={columns} rows={rows} maxRows={3} size="small" />
                </Paper>
            </div>

            {/* ── Striped Table ── */}
            <div className={classes.section}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.subtitle}>
                        Striped Table
                    </Typography>
                    <ResizableTable columns={columns} rows={rows} maxRows={7} striped />
                </Paper>
            </div>
        </div>
    );
}

export default TableDemo;
