import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [queryArray, set_queryArray] = useState([]);
  const [dataFields, set_dataFields] = useState([]);
  const [count, set_count] = useState(0);

  const handleQuery = () => {
    console.log('handled');
    set_queryArray(...queryArray, { key: '', value: '' });
    set_count(count + 1);
    
    const dataField = (
      <>
        Key
        <input type="text" id={count} onChange={(e) => {
            const newArr = queryArray;
            const index = e.target.id;
            newArr[index].key = e.target.value;
            set_queryArray(queryArray);
          }}
        />
        Value
        <input type="text" onChange={() => {
            const newArr = queryArray;
            const index = e.target.id;
            newArr[index].key = e.target.value;
            set_queryArray(queryArray);
          }}
        />
      </>
    );
    set_dataFields([...dataFields, dataField]);
  };
  return (
    <div>
      <span>query-params</span>
      <br />
      <button onClick={handleQuery}>Add</button>
      <br />

      {dataFields}
      <br />
      <button>Say</button>
    </div>
  );
}
