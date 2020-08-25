import React from 'react';
import './SideBar.css'

const SideBar = (props) => {
    const bar = props.bar;
    
    const totalSalary = bar.reduce((total, bars) => total + bars.salary, 0)
    return (
        <div>
          <h3>Side Bar</h3>
          <h4>Friend's: {bar.length}</h4>
          <p>Total Salary: {Number(totalSalary)}</p>
          {bar.map((friend) => {
          return (
          <div className="side-show">
            <img className="mr-3" src={friend.photo} style={{ height: "50px" }} alt="" />
            <h4>{friend.name}</h4>
          </div>
        );
      })}
            
        </div>
    );
};

export default SideBar;