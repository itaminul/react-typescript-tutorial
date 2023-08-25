import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

interface EmployeeData {
    id: number,
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
            <div className="relative overflow-x-auto">
                <div className="px-90 py-3">
                    <Link to="/aboutusform">
                        <button type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800
                     focus:ring-4 focus:ring-blue-300 font-medium 
                     rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 
                     dark:bg-blue-600 dark:hover:bg-blue-700 
                     focus:outline-none dark:focus:ring-blue-800">
                            Create
                        </button>

                    </Link>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Middle Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Full Name
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Dept Id ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {dataWithMemo?.map((item) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.middleName}
                                </th>
                                <td className="px-6 py-4">
                                    {item.fullName}
                                </td>
                                <td className="px-6 py-4">
                                    {item.phone}
                                </td>
                                <td className="px-6 py-4">
                                    {item.deptId}
                                </td>
                                <td className="px-6 py-4">
                                    {item.deptId}
                                </td>
                                <td className="px-6 py-4">
                                    <Link to={`/editaboutus/${item.id}`}>
                                        <button type="button"
                                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                            Edit
                                        </button>

                                    </Link>
                                </td>
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