import React from 'react';

class Employee extends React.Component {
  render() {
           var employees = [
             { empId: 1458, name: 'Siva', designation:'SE', location:'Bangalore', salary: 20000 },
             { empId: 5265, name: 'Chaithu', designation:'SSE', location:'Hyderabad', salary: 25000 },
             { empId: 4530, name: 'Ravi',designation:'TA', location:'Mysore', salary: 40000 }
           ]
          
          
          return (<React.Fragment>
                  <table style={{width:'60%'}} className='table'>
                       <thead className="thead-light">
                           <tr>
                                <th>EmpID</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Location</th>
                                <th>Salary</th>
                           </tr>
                       </thead>
                       <tbody>
                            {employees.map(employee => {
                                   return (<tr>
                                           <td>{employee.empId}</td>
                                           <td>{employee.name}</td>
                                           <td>{employee.designation}</td>
                                           <td>{employee.location}</td>
                                           <td>{employee.salary}</td>
                                           
                                   </tr>)
                           })
                           }
                       </tbody>
                       
                  </table>
          </React.Fragment>)  
  }
}
export default Employee;
