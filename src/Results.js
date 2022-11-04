import React, { useState } from 'react';
import './Results.css';

function Results(props) {
  const checkIsUser = (employee) => {
    if (employee.id == props.userData.id) {
      return ('is_user');
    }
      return('');
  }
  return (
    <>
    <div id='results'>
      <h3>Orange data is you!</h3>
      <table id='result_table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone #</th>
          <th>Work Role</th>
          <th>Location</th>
          <th>Salary</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {
          props.displayData.map((employee, index) => (
            <tr key={index} id={checkIsUser(employee)}>
              <td>{employee.name}</td>
              <td>{employee.phone}</td>
              <td>{employee.role}</td>
              <td>{employee.location}</td>
              <td>${employee.salary}</td>
              <td>{employee.type}</td>
            </tr>
            ))
        }
      </tbody>
      </table>
      <button id='go_back_button' onClick={()=> {props.setWasSearched(false); props.setDisplayData([])}}>Go Back</button>
    </div>
    </>
  );
}

export default Results;
