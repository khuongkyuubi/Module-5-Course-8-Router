import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const employees = [
    {
        id: 1,
        name: "Hoa",
        age: 20
    },
    {
        id: 2,
        name: "Khánh",
        age: 25
    },
    {
        id: 3,
        name: "Tú",
        age: 22
    },
]

function Welcome() {
    const {state} = useLocation();

    const navigate = useNavigate();
    const handleDetail = employee => {
        navigate("/employees/detail", {state: employee});
    }

    useEffect(() => {
        // console.log(!state?.email)
        if (!state?.email) {
            navigate("/login")
        }
    }, [state])

    const isAuth = state?.email;
    return isAuth && (
        <div className="App">
            <h1>Welcome {state?.email}</h1>
            <hr/>
            <table style={{
                border: '1px solid'
            }}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Detail</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>
                                <button onClick={() => handleDetail(employee)}>Detail</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default Welcome;