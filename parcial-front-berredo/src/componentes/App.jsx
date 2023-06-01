import React, { useState } from 'react';
import InputForm from './InputForm';
import Cards from './Cards';

const App = () => { 
    const[dataList, setDataList] = useState([]);
    
    const handleSubmit = (FormData) => {
        setDataList([...dataList, FormData]);
    };
  
  return (
    <div>
        <h1>Formulario</h1>
        <inputForm onSubmit={handleSubmit} />
        {dataList.map((data, index) => (
            <Cards key={index} input1={data.input1} input2={data.input2}/>
        ))}
    </div>
  );
};

export default App;
