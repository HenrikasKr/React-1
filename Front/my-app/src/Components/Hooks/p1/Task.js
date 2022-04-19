import React from 'react';
import { useState } from 'react';

function Task(){
    const [color, setColor] = useState(false);


    function changeColor(){
        setColor(!color);
    }
  return (
    <div className="col-4 mb-4 me-1 border rounded border-dark text-center">
        <h3 className='col-12'>
            Task is {color ? "done" : "not done"}
        </h3>
        <p className='col-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, vero? Aperiam, laudantium voluptas minus nesciunt rerum inventore, eveniet ducimus nam doloremque corporis pariatur ipsum maiores dolor non similique incidunt fugiat.
        </p>
        <button className={color ? "bg-success mb-4" : "bg-danger mb-4"} onClick={changeColor} >
            {color ? "Done" : "Not done"}
        </button>
    </div>
  )
}

export default Task;