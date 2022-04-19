import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <a onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </a>
    </p>
  );
};
  
const Content = () => {
  return (
    <div className="container w-25 border border">
      <p>
        <ReadMore>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia numquam eligendi quidem ut eius quas excepturi necessitatibus, vitae aliquid voluptatibus asperiores accusamus. Voluptates voluptatem velit fugit cum libero dolor dolore.
        </ReadMore>
      </p>
    </div>
  );
};
  
export default Content;