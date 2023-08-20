import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
    middleName: string,
    lastName: string,
    fullName: string,
    phone: string,
    empImage: File | null,
    deptId: number | null,
    gender: number | null,
    dateOfBirth: string
}
interface EmployeeData {
    middleName: string,
    lastName: string,
    fullName: string,
    file: string,
    phone: string,
    deptId: number
}

const About = () => {
    /*
        const middleName = useRef<HTMLInputElement | null>(null);
        const lastName = useRef<HTMLInputElement | null>(null)
        const fullName = useRef<HTMLInputElement | null>(null)
        const empImage = useRef<HTMLInputElement | null>(null)
        const refMobile = useRef<HTMLInputElement | null>(null)
        const deptId = useRef<HTMLSelectElement | null>(null)
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            // const formData: FormData = {
            //     middleName: middleName.current?.value || '',
            //     lastName: lastName.current?.value || '',
            //     fullName: fullName.current?.value || '',
            //     empImage: empImage.current?.value || ''
            //       }
    
            
            const dv = deptId.current?.value || '';
            const cv = Number(dv);
            
            const formData = new FormData()      
            formData.append('empImage', empImage.current?.files?.[0] as File)
            formData.append('middleName', middleName.current?.value || '')
            formData.append('lastName', lastName.current?.value || '')
            formData.append('fullName', fullName.current?.value || '')
            formData.append('phone', refMobile.current?.value || '')
            formData.append('deptId', `${cv}`) 
            console.log("formData test", formData)       
          
            try {
                
                console.log("formData test", formData)
               
                const accessToken = localStorage.getItem('accessToken')
                const response = await fetch('http://localhost:9007/employee-info', {
                    method: 'POST',
                    headers: {                  
                        Authorization: `Bearer ${accessToken}`
                    },
                    body: formData,
                })
                if (response.ok) {
                      
                    console.log("success")
                } else {
                    console.log("error")
                }
            } catch (error) {
                console.log("error", error)
            }
           
    
        }
    
    */

    const [formV, setFormData] = useState<FormData>({
        middleName: '',
        lastName: '',
        fullName: '',
        phone: '',
        empImage: null,
        deptId: null,
        gender: null,
        dateOfBirth: ''
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLButtonElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))

    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setFormData((prevData) => ({
            ...prevData,
            empImage: file,

        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { lastName, middleName, fullName, empImage } = formV;
        // console.log("file file file", empImage)
        const formDataToSend: any = new FormData();
        formDataToSend.append('lastName', lastName)
        formDataToSend.append('middleName', middleName)
        formDataToSend.append('fullName', fullName)

        if (empImage) {
            formDataToSend.append('file', empImage)
        }
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`${process.env.REACT_APP_API_URL}/employee-info`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                body: formDataToSend
            })
            if (response.ok) {
                console.log("success")
            } else {
                console.log('error')
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    //featch employee data
    const [employeeInfo, setEmployeeInfo] = useState<EmployeeData[]>([])
    const accessToken = localStorage.getItem('accessToken');
    const feachData = async () => {
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
    //  console.log('memo', employeeInfo)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="middleName"
                    onChange={handleChange}
                // ref={middleName}
                /> <br /><br />
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    // ref={lastName}
                    onChange={handleChange}
                />
                <br /><br />
                <label>Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    // ref={fullName}
                    onChange={handleChange}
                />
                <br /><br />
                <label>Phone</label>
                <input

                    type="text"
                    name="phone"
                    // ref={refMobile}
                    onChange={handleChange}
                />
                <br /><br />

                <input type="file" name="empImage" onChange={handleFileChange} />

                <br /><br />
                <label>Dept</label>
                <select

                    name="deptId"
                    // ref={deptId}
                    onChange={handleChange}
                >
                    <option value="">--select--</option>
                    <option value={1}>PHP</option>
                    <option value={2}>Java</option>
                </select>
                <br /><br />
                <label>Gender</label>
                <input
                    type="radio"
                    name="gender"
                    value={1}
                    onChange={handleChange}
                />
                <input
                    type="radio"
                    name="gender"
                    value={2}
                    onChange={handleChange}
                />
                <br /><br />
                <label>Date of birth</label>
                <input
                    type="date"
                    name="dateOfBirth"
                    onChange={handleChange}
                />
                <br /><br /><br />
                <button>Submit</button>

            </form>
            <div>

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

export default About;