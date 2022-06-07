import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Box,
    Paper,
  } from '@mui/material'
// import styles from './TableData.styles';
import './TableData.css';

// const classes = styles()
const col = [
    {
        label:'Jan 2020'
      },
      {
        label:'Feb 2020'
      },
      {
        label:'Mar 2020'
      },
      {
        label:'Apr 2020'
      },
      {
        label:'May 2020'
      },
      {
        label:'Jun 2020'
      }
]
const data  = [23,234,234,234,435,12];


export default function TableData(props){
    console.log(props.col);
    console.log(props.data);
    return (
        <TableContainer component={Paper} className={'tableContainer'} style= {{width: '650px', position: 'absolute', left: '140px'}}>
            <Table className='table'>
                <TableHead>
                    <TableRow>
                        {
                            props.col.map((item) => (
                                <TableCell key={item.label}>
                                    {item.label}
                                </TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                        {
                            props.data.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        {item}
                                    </TableCell>
                                    <TableCell>
                                        {item}
                                    </TableCell>
                                    <TableCell>
                                        {item}
                                    </TableCell>
                                    <TableCell>
                                        {item}
                                    </TableCell>
                                    <TableCell>
                                        {item}
                                    </TableCell>
                                    <TableCell>
                                        {item}
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

// export default TableData;

// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(
//   name,calories,fat,carbs,protein,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
