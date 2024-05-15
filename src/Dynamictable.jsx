import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Dynamictable = () => {

  const [formInput, setFormInput] = useState([
    {
      id: '',
      name: '',
      email: '',
      salary: ''
    }
  ])

  const addField = () => {
    let obj = {
      id: Math.floor(Math.random() * 10000),
      name: '',
      email: '',
      salary: ''
    };
    setFormInput([...formInput, obj]);
  }

  const removeField = (id) => {
    console.log(id);
    let alldata = [...formInput]
    let updatedFields = alldata.filter(val => val.id !== id);
    setFormInput(updatedFields);
  }

  return (
    <div align="center">
      <h1 className=' mt-2 mb-5'>React - Add & Delete Table Rows Dynamically</h1>
      <table>
        <thead>
          <tr style={{ borderBottom: '2px solid black' }}>
            <th className='mb-3 h5'>Full Name</th>
            <th className='mb-3 h5'>Email Address</th>
            <th className='mb-3 h5'>Salary</th>
            <th><button className='border rounded-1 h5 border-2 border-success py-2 px-3 mb-3 text-success' onClick={() => addField()}>+</button></th>
          </tr>
        </thead>
        <tbody>
          {
          formInput.map((val) => {
            return(
              <tr key={val.id}>
                <td><input type='text' className='me-3 py-1 px-3 mb-3 mt-1' />{val.name}</td>
                <td><input type='text' className='me-3 py-1 px-3 mb-3 mt-1' />{val.email}</td>
                <td><input type='text' className='me-3 py-1 px-3 mb-3 mt-1' />{val.salary}</td>
                <td><button className='border rounded-1 border-2 border-danger py-2 px-3 text-danger mb-3 mt-1' onClick={() => removeField(val.id)}>x</button></td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Dynamictable;
