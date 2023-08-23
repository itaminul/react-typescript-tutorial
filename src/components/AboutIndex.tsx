import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

interface EmployeeData {
    middleName: string,
    lastName: string,
    fullName: string,
    file: string,
    phone: string,
    deptId: number
}

const AboutIndex = () => {


const [employeeInfo, setEmployeeInfo] = useState<EmployeeData[]>([])
const feachData = async () => {
    //featch employee data

const accessToken = localStorage.getItem('accessToken');
    try {
        const response = await fetch('http://localhost:9007/employee-info', {
            method: 'GET',
            headers: {
                //'Content-Type': 'multipart/formdata',
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (response.ok) {
            const showData = await response.json()
            const result = showData.response;
            setEmployeeInfo(result);
            // console.log('Json', result)
        } else {
            console.log("error")
        }
    } catch (error) {
        console.log("error", error)
    }
}
useEffect(() => {
    feachData();
}, [])

const dataWithMemo = useMemo(() => employeeInfo, [employeeInfo])


    return (
        <>
            <div>About us form</div>
            <div>
                <div>
                    <Link to="/aboutusform">Create</Link>
                </div>

                <table className="tableStyle">
                    <thead>
                        <tr>
                            <td>Middle Name</td>
                            <td>Full Name</td>
                            <td>phone</td>
                            <td>Dept Id ID</td>
                            <td>Image</td>

                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {dataWithMemo?.map((item) => (
                            <tr>
                                <td>{item.middleName}</td>
                                <td>{item.fullName}</td>
                                <td>{item.phone}</td>
                                <td>{item.deptId}</td>
                                <td>

                                </td>
                                <td>Edit</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default AboutIndex