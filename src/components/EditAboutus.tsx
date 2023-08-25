import { useEffect } from "react"
import { useParams } from "react-router-dom"

const EditAboutus = () => {
    const id = useParams()
    const accessToken = localStorage.getItem('accesstoken')
    const handleChange = ()  => {

    }

    const handleFileChange = () => {

    }
    const handleSubmit = () => {

    }


    const getPreviouseInformation = async(e:any) => {
        e.preventDefault()
        try {
            const resonse = await fetch(`${process.env.REACT_APP_API_URL}/employee-info/getByid/${id}`, {
                method: 'Patch',
                headers: {
                    Authorization: `Bearer ${accessToken}`                    
                }


            })

            if(resonse.ok) {
                console.log("show success")
            }
        } catch (error) {
            console.log("error", error)
            
        }
    }

    useEffect(() => {
        // getPreviouseInformation()
    }, [])

    return (
        <>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>

                <div className="md:flex mt-14 md:items-center mb-6">
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
                    <label className="block uppercase 
                     tracking-wide text-gray-700 text-xs font-bold mb-2
                     mt-2
                     ">
                        Dept
                    </label>
                    <div className="w-full">
                        <select className="ml-44 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Gender
                    </label>
                    <div className="relative ml-44">
                        Male <input
                            id="checkbox-1"
                            type="radio"
                            className="w-4 h-4 text-blue-600 
                            bg-gray-100 border-gray-300 rounded
                             focus:ring-blue-500 dark:focus:ring-blue-600
                              dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800
                               focus:ring-2 dark:bg-gray-700
                                dark:border-gray-600"
                            name="gender"
                            value={2}
                            onChange={handleChange}
                        />

                        <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                            Male.
                        </label>
                    </div>

                    <div className="relative ml-44">
                        <input
                            id="checkbox-1"
                            type="radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="gender"
                            value={1}
                            onChange={handleChange}
                        />
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Femaile</label>
                    </div>

                </div>


                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Date of birth
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="date"
                            name="dateOfBirth"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <br /><br /><br />
                <button>Submit</button>

            </form>

        </>
    )
}

export default EditAboutus;