import React from 'react';

class Employee extends React.Component {
  render() {
           var employees = [
             { empId: 1458, name: 'Siva', designation:'SE', location:'Bangalore'  },
             { empId: 5265, name: 'Chaithu', designation:'SSE', location:'Hyderabad' },
             { empId: 4530, name: 'Ravi',designation:'TA', location:'Mysore' }
           ]
          
          return (<React.Fragment>
                  <table style={{width:'60%'}} className='table'>
                       <thead className="thead-light">
                           <tr>
                                <th>EmpID</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Location</th>
                           </tr>
                       </thead>
                       <tbody>
                            {employees.map(employee => {
                                   return (<tr>
                                           <td>{employee.empId}</td>
                                           <td>{employee.name}</td>
                                           <td>{employee.designation}</td>
                                           <td>{employee.location}</td>
                                   </tr>)
                           })
                           }
                       </tbody>
                       
                  </table>
          </React.Fragment>)  
  }
}
export default Employee;
