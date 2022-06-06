import * as React from 'react';
import {useState, useEffect} from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend} from 'recharts';
import './App.css';

function CustomTooltip(props, { active, payload, label }) {
  console.log(props.payload);
  console.log(props.sales);
  if (active) {
    return (
      <div className="tooltip">
        {/* <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4> */}
        <p>${payload[0].value} CAD</p>
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
    }
  ]

  const [salesGraph, setSalesGraph] = useState(false);
  const [shippedGraph, setShippedGraph] = useState(false);
  const handleHover = (name) => {
    // console.log(/val.payload,' ', name);
    if (name == 'Sales') {
      setSalesGraph(!salesGraph);
    }
    else {
      setShippedGraph(!shippedGraph);
    }
  }
  return (
    <div className="App">
      <h1 className='headerH1'>Report POC</h1>
      <ResponsiveContainer  width={730} height={250} >
        <LineChart data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid vertical = {false} strokeDasharray="3 3" />
          <XAxis dataKey="name"  tickLine={false}  />
          <YAxis tickLine={false} />
          <Tooltip cursor={false}  content={<CustomTooltip sales = {salesGraph} shipped ={shippedGraph}/>}/>
          {/* <Legend /> */}
          <Line type="" dataKey="pv" stroke="#8884d8" activeDot={{onMouseOver: (e) => handleHover('Sale'), onMouseLeave: (e) => handleHover('Sale') }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" activeDot={{onMouseOver: (e) => handleHover('Shipped'), onMouseLeave: (e) => handleHover('Shipped') }}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
