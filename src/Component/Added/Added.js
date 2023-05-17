import React from 'react';


const Added = (props) => {
    const friend = props.friend;

    const totalSalary = friend.reduce((sum, user) => sum + parseInt(user.salary), 0)
    
    return (
        <div>
            <h4><b>Salary: </b> {totalSalary}</h4>
        </div>
    );
};

export default Added;