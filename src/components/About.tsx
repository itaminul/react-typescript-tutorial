import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
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

    //  console.log('memo', employeeInfo)
    return (
        <>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Last Name
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="inline-full-name" 
                type="text" 
                name="middleName"
                onChange={handleChange}
                 />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Last Name
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="inline-full-name" 
                type="text" 
                name="lastName"
                // ref={lastName}
                onChange={handleChange}
                 />
                </div>
            </div>




            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Full Name
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="inline-full-name" 
                type="text" 
                name="fullName"
                // ref={fullName}
                onChange={handleChange}
                 />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Phone
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="inline-full-name" 
                type="text" 
                name="phone"
                    // ref={refMobile}
                    onChange={handleChange}
                 />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Image
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="inline-full-name" 
                type="file" 
                name="empImage"
                    // ref={refMobile}
                    onChange={handleFileChange}
                 />
                </div>
            </div>


            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Dept
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        id="grid-state"
        name="deptId"
        // ref={deptId}
        onChange={handleChange}
        >
        <option value="">--select--</option>
                    <option value={1}>PHP</option>
                    <option value={2}>Java</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
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

        </>
    )
}

export default About;