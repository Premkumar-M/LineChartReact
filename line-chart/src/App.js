import * as React from 'react';
import {useState, useEffect} from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend} from 'recharts';
import './App.css';
import TableData from './Components/TableData';
import { IconButton } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const columnData = [
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
  },
  {
    label:'Jul 2020'
  },
  {
    label:'Aug 2020'
  },
  {
    label:'Sep 2020'
  },
  {
    label:'Oct 2020'
  },
  {
    label:'Nov 2020'
  },
  {
    label:'Dec 2020'
  }
]

const table_data = [23,435,12,21];

function CustomTooltip(props, { active, payload, label }) {
  console.log(props.payload);
  console.log(props.sales);
  if (props.active) {
    return (
      <div className="tooltip">
        {/* <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4> */}
        <p>{'Top 10 Items'}</p>
        <table className='table1'>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </table>
      </div>
    );
  }
  return null;
}


function App() {
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "Page H",
      "uv": 3000,
      "pv": 3800,
      "amt": 2290
    },
    {
      "name": "Page I",
      "uv": 4780,
      "pv": 5908,
      "amt": 2000
    },
    {
      "name": "Page J",
      "uv": 2890,
      "pv": 1800,
      "amt": 2181
    },
    {
      "name": "Page K",
      "uv": 2790,
      "pv": 3100,
      "amt": 2500
    },
    {
      "name": "Page L",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

  const [salesGraph, setSalesGraph] = useState(false);
  const [shippedGraph, setShippedGraph] = useState(false);
  const [page, setPage] = useState(1);
  const [graphData, setGraphData] = useState([])
  const [tableCol, setTableCol] = useState([])
  const handleHover = (name) => {
    // console.log(/val.payload,' ', name);
    if (name == 'Sales') {
      setSalesGraph(!salesGraph);
    }
    else {
      setShippedGraph(!shippedGraph);
    }
  }
  useEffect(() => {
    setGraphData(data.slice((page-1)*6, page*6));
    setTableCol(columnData.slice((page-1)*6, page*6))
  }, [page])
  const slideHandler = (direction) => {
    console.log(direction);
    if ((page+1) * 6 > data.length) {
      setPage(1)
    } else {
      setPage(page+1)
    }

  }
  return (
    <div className="App">
      <h1 className='headerH1'>Report POC</h1>
      <ResponsiveContainer  width={1500} height={700} >
        <LineChart data={graphData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid vertical = {false} strokeDasharray="3 3" />
          {/* <XAxis dataKey="name"  tickLine={false}  /> */}
          <YAxis tickLine={false} style={{position: 'absolute', left:'50px'}}/>
          <Tooltip cursor={false}  content={<CustomTooltip sales = {salesGraph} shipped ={shippedGraph}/>}/>
          {/* <Legend /> */}
          <Line type="" dataKey="pv" stroke="#8884d8" /> {/* // activeDot={{onMouseOver: (e) => handleHover('Sale'), onMouseLeave: (e) => handleHover('Sale') }} */} 
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <TableData col = {tableCol} data = {table_data}/>
      <IconButton onClick={e => slideHandler(-1)}><ArrowBackIosIcon className='arrowLeft'/></IconButton>
      <IconButton onClick={e => slideHandler(1)}><ArrowForwardIosIcon className='arrowRight'/></IconButton>
    </div>
  );
}

export default App;
