import React from 'react';
import './titles.css';
const Titles = (props) => {
  return (
    <div className="w-100 p-2 bg-dark text-capitalize d-flex align-items-center justify-content-center rounded-2 my-3 titles">
      <h2>{props.title}</h2> {props.icon}
    </div>
  );
}

export default Titles