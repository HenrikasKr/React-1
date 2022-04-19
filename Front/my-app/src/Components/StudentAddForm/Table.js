import React from 'react'
import Card from './Card'
import './table.css'


function Table() {
  return (
    <>
    
    <div className="container">
        <div className="row">
          <div className="col right">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Date of birth</th>
                    <th>City</th>
                    <th>Program</th>
                    <th>Group</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                <Card />  
            </table>
        </div>

        </div>
    </div>
      

    </>
  )

  
}

export default Table