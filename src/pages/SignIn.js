import React, { useState } from 'react'
import useFormValidate from '../utilities/useFormValidate';
import useHttpService from '../utilities/useHttpService';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
const initialFormData = {
    Username: "",
    Password: "",
    OrgId: "",
    BranchCode: ""
}
const SignIn = () => {
    const [formValues, setFormValues] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({})
    const { signInValidation } = useFormValidate()
    const { post } = useHttpService("https://catchyfiveapi.appxes-erp.in")
    const navigate = useNavigate()
    const handleSignInOnchange = (event) => {
        const { name, value } = event.target;
        setFormValues((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }
    const handleSignInOnSubmit = (event) => {
        event.preventDefault();
        const errors = signInValidation(formValues);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) handleFormPost();
    }
    const handleFormPost = async () => {
        try {
            const respose = await post("/B2CCustomerRegister/CustomerLogin", formValues);
            if (respose?.Status) {
                setFormValues(initialFormData);
                Cookies.set("isAuth", true);
                navigate("/")
            }
            else {
                toast.error('invalid credentials')
            }
        }
        catch (any) {
            console.error("any", any);
        }
    }

    return (
        <div className='flex justify-center bg-[#A7D7C580] min-h-screen items-center py-10'>
            <section className='min-h-[80vh] w-[40vw] bg-[#FFF] rounded-[16px] p-6 shadow-lg'>
                <div className='border-b border-gray-300'>
                    <h2 className='text-[#000] text-[24px] font-semibold text-center pb-3'>Sign in</h2>
                </div>
                <div className='mt-3'>
                    <form onSubmit={handleSignInOnSubmit}>
                        <div>
                            <label htmlFor='Username' className='block pb-1'>Username</label>
                            <input type='text' id='Username' name='Username' value={formValues.Username} onChange={handleSignInOnchange} className='block w-full h-[44px] border border-gray-300 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                            {formErrors.Username && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.Username}</p>}
                        </div>
                        <div>
                            <label htmlFor='Password' className='block pb-1'>Password</label>
                            <input type='password' id='Password' name='Password' value={formValues.Password} onChange={handleSignInOnchange} className='block w-full h-[44px] border border-gray-300 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                            {formErrors.Password && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.Password}</p>}
                        </div>
                        <div>
                            <label htmlFor='OrgId' className='block pb-1'>Oraganization ID</label>
                            <input type='number' id='OrgId' name='OrgId' value={formValues.OrgId} onChange={handleSignInOnchange} className='block w-full h-[44px] border border-gray-300 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0 disabled:bg-gray-100 disabled:cursor-not-allowed ' />
                            {formErrors.OrgId && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.OrgId}</p>}

                        </div>
                        <div>
                            <label htmlFor='BranchCode' className='block pb-1'>Branch Code</label>
                            <input type='text' id='BranchCode' name='BranchCode' value={formValues.BranchCode} onChange={handleSignInOnchange} className='block w-full h-[44px] border border-gray-300 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                            {formErrors.BranchCode && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.BranchCode}</p>}
                        </div>
                        <div className='mt-6 flex flex-col items-center'>
                            <button type='submit' className=' text-[#FFF] text-center text-[18px] px-10 py-3 rounded-[8px] font-semibold bg-[#7f32e3]'>log in</button>
                            <div className='pt-4'>
                                <p className='text-gray-500'>Don't Have an Account?  <Link to="/sign-up" className='underline'>Sign Up</Link> </p>
                            </div>
                        </div>
                    </form>
                </div>

            </section>
        </div>
    )
}

export default SignIn
