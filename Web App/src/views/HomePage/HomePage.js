import React from 'react';
import { withStyles, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead } from '@material-ui/core';
import {TableRow, Paper, Link, Typography } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#00a152",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "#e3f0d3",
        },
    },
}))(TableRow);

function createData(id, name, age) {
    return { id, name, age };
}

const rows = [
    createData(1, "Ahmad Bin Suleman", 22),
    createData(2, "Aamna Ahmad", 23),
    createData(3, "Mirza Jamshed", 40),
    createData(4, "Wahaj Mustakeem", 69),
    createData(5, "Inaam Shehzaad", 42),
    createData(6, "Fatima Umar", 34),
    createData(7, "Fatima Malik", 66),
];

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(3)
    },
    table: {
        minWidth: 700,
    },
}));

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Typography variant="h2" style={{ color: '#bdbdbd', marginBottom: "40px" }}>Current Patients</Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">Age</StyledTableCell>
                            <StyledTableCell align="right">&nbsp;</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.age}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Link
                                        href="#"
                                        variant="body2"
                                        style={{ color: '#00a152' }}
                                    >
                                        View Profile
                                </Link>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
