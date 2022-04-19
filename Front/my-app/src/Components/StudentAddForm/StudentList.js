import React from "react";
import './table.css'


function StudentList({ id, vardas, pavarde, gm, miestas, programa, grupe, editStudent, deleteStudent}) {

    function refreshPage() {
        window.location.reload(false);
      }

      var gim = gm.toString().substr(0,10);

  return (

    <>
      <tr>
        <td>{vardas}</td>
        <td>{pavarde}</td>
        <td>{gim}</td>
        <td>{miestas}</td>
        <td>{programa}</td>
        <td>{grupe}</td>
        <td><button onClick={() => editStudent(id)} className="btn btn-primary">Update</button></td>
        <td><button onClick={() => {
            deleteStudent(id)
            refreshPage()
            }} className="btn btn-danger">Delete</button></td>
      </tr>
    </>
  );
}

export default StudentList;