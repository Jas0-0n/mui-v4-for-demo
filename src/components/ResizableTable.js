import React, { useState, useCallback, useRef } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    overflowX: 'auto',
  },
  headerCell: {
    position: 'relative',
    overflow: 'visible',
  },
  resizeHandle: {
    position: 'absolute',
    right: -4,
    top: 0,
    bottom: 0,
    width: 10,
    cursor: 'col-resize',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&::after': {
      content: '""',
      display: 'block',
      width: 3,
      height: '60%',
      backgroundColor: theme.palette.divider,
      borderRadius: 2,
      transition: 'background-color 0.2s, height 0.2s',
      opacity: 0.4,
    },
    '&:hover::after': {
      backgroundColor: theme.palette.primary.main,
      height: '80%',
      opacity: 1,
    },
    '&:active::after': {
      backgroundColor: theme.palette.primary.dark,
      height: '90%',
      opacity: 1,
    },
  },
  resizingOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    cursor: 'col-resize',
  },
  lastCellHandle: {
    display: 'none',
  },
}));

/**
 * ResizableTable — A Material-UI table wrapper with draggable column resizing.
 *
 * @param {Object} props
 * @param {Array<{id: string, label: string, align?: string, minWidth?: number, maxWidth?: number, width?: number, sortable?: boolean, render?: function}>} props.columns
 *   Column definitions. Each column can specify minWidth (default 80), maxWidth (default 600), and an initial width.
 *   Provide a custom `render(row, column)` function to control cell content and render any React node,
 *   such as a `TextField`, `Select`, menu, button, or custom component.
 * @param {Array} props.rows
 *   Array of row data objects. Each row's property named by column.id is rendered by default.
 * @param {'small'|'medium'} [props.size]
 *   Pass "small" for a dense table.
 * @param {boolean} [props.striped]
 *   When true, alternating row backgrounds are applied.
 * @param {number} [props.maxRows]
 *   If set, only the first N rows are displayed.
 * @param {boolean} [props.sortable]
 *   Enable sorting for all columns (unless overridden per column).
 * @param {function} [props.onSort]
 *   Callback when sort changes: (columnId, direction) => void
 * @param {string} [props.orderBy]
 *   Currently sorted column id (for controlled sort).
 * @param {'asc'|'desc'} [props.order]
 *   Current sort direction (for controlled sort).
 * @param {function} [props.onColumnResize]
 *   Callback when a column is resized: (columnId, newWidth) => void
 */
function ResizableTable({
  columns,
  rows,
  size,
  striped,
  maxRows,
  sortable: globalSortable,
  onSort,
  orderBy: controlledOrderBy,
  order: controlledOrder,
  onColumnResize,
}) {
  const classes = useStyles();

  // Internal column widths state (keyed by column id)
  const [localWidths, setLocalWidths] = useState(() => {
    const initial = {};
    columns.forEach((col) => {
      if (col.width) initial[col.id] = col.width;
    });
    return initial;
  });

  const isResizing = useRef(false);
  const currentColumn = useRef(null);
  const startX = useRef(0);
  const startWidth = useRef(0);

  // Use controlled widths if onColumnResize is provided
  const columnWidths = localWidths;

  const getColumnValue = useCallback((col, row) => {
    if (col.render) return col.render(row, col);
    return row[col.id];
  }, []);

  const isFirstColumn = useCallback((colId) => {
    return columns.length > 0 && columns[0].id === colId;
  }, [columns]);

  const handleMouseDown = useCallback((e, colId) => {
    e.preventDefault();
    e.stopPropagation();

    const column = columns.find((c) => c.id === colId);
    if (!column) return;

    isResizing.current = true;
    currentColumn.current = colId;
    startX.current = e.clientX;
    startWidth.current = columnWidths[colId] || column.width || 150;

    const handleMouseMove = (moveEvent) => {
      if (!isResizing.current) return;
      const diff = moveEvent.clientX - startX.current;
      const minW = column.minWidth || 80;
      const maxW = column.maxWidth || 600;
      const newWidth = Math.round(Math.max(minW, Math.min(maxW, startWidth.current + diff)));

      setLocalWidths((prev) => {
        if (prev[colId] === newWidth) return prev;
        return { ...prev, [colId]: newWidth };
      });
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      currentColumn.current = null;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      if (onColumnResize) {
        onColumnResize(colId, columnWidths[colId]);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [columns, columnWidths, onColumnResize]);

  const visibleRows = maxRows ? rows.slice(0, maxRows) : rows;

  const getCellStyle = (col) => {
    const width = columnWidths[col.id];
    if (width) return { width, minWidth: col.minWidth || 80, maxWidth: col.maxWidth || 600 };
    if (col.width) return { width: col.width, minWidth: col.minWidth || 80, maxWidth: col.maxWidth || 600 };
    return {};
  };

  return (
    <TableContainer className={classes.tableContainer}>
      <Table size={size}>
        <TableHead>
          <TableRow>
            {columns.map((col, index) => {
              const isLast = index === columns.length - 1;
              const isSortable = col.sortable !== undefined ? col.sortable : globalSortable;
              const isActiveSort = controlledOrderBy === col.id;

              return (
                <TableCell
                  key={col.id}
                  align={col.align || 'left'}
                  className={classes.headerCell}
                  style={getCellStyle(col)}
                  sortDirection={isActiveSort ? controlledOrder : false}
                >
                  {isSortable ? (
                    <TableSortLabel
                      active={isActiveSort}
                      direction={isActiveSort ? controlledOrder : 'asc'}
                      onClick={() => onSort && onSort(col.id)}
                    >
                      {col.label}
                    </TableSortLabel>
                  ) : (
                    col.label
                  )}
                  {!isLast && (
                    <div
                      className={classes.resizeHandle}
                      onMouseDown={(e) => handleMouseDown(e, col.id)}
                    />
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map((row, index) => (
            <TableRow
              key={row.id || row.name || index}
              style={
                striped
                  ? { backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'transparent' }
                  : undefined
              }
            >
              {columns.map((col) => {
                const isFirst = isFirstColumn(col.id);
                const cellContent = getColumnValue(col, row);

                return (
                  <TableCell
                    key={col.id}
                    align={col.align || 'left'}
                    style={getCellStyle(col)}
                    {...(isFirst ? { component: 'th', scope: 'row' } : {})}
                  >
                    {cellContent}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ResizableTable;
