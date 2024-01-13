import React from 'react';

const Services = (props) => {
  return (
    <div className="text-center text-capitalize text-danger d-flex flex-column mt-3 border service">
      <img
        src={props.pic}
        alt="service"
      />
          <span className="text-uppercase py-2 ">{props.type}</span>
    </div>
  );
}

export default Services