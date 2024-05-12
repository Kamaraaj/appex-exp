import React, { useState } from 'react'
import useFormValidate from '../utilities/useFormValidate'
import useHttpService from '../utilities/useHttpService'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialFormData = {
    OrgId: "",
    BranchCode: "",
    B2CCustomerId: "",
    B2CCustomerName: "",
    EmailId: "",
    Password: "",
    AddressLine1: "",
    AddressLine2: "",
    AddressLine3: "",
    MobileNo: "",
    CountryId: "",
    PostalCode: "",
    IsActive: "",
    IsApproved: "",
    CreatedBy: "",
    CreatedOn: "",
    ChangedBy: "",
    ChangedOn: "",
    FloorNo: "",
    UnitNo: ""
}

const SignUp = () => {
    const [formValues, setFormValues] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({})
    const { signUpValidation } = useFormValidate()
    const { post } = useHttpService("https://catchyfiveapi.appxes-erp.in")
    const navigate = useNavigate()


    const handleSignUpOnchange = (event) => {
        const { name, value } = event.target;
        setFormValues((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }
    const handleSignUpOnSubmit = (event) => {
        event.preventDefault();
        const errors = signUpValidation(formValues);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) handleFormPost();
    }
    const handleFormPost = async () => {
        try {
            const respose = await post("/B2CCustomerRegister/Create", formValues);
            if (respose.Status) {
                toast.success('Registration is success !');
                setFormValues(initialFormData)
                navigate("/sign-in")
            }
            else {
                toast.error('Invalid Form data')
            }
        }
        catch (any) {
            console.error("any", any);
        }
    }


    return (
        <div className='flex justify-center bg-[#A7D7C580] py-10'>
            <section className='w-[60vw] max-w-[60vw] bg-[#FFF] rounded-[16px] p-6 shadow-lg'>
                <div className='border-b border-gray-400'>
                    <h2 className='text-[#000] text-[24px] font-semibold text-center pb-1'>Create An Account</h2>
                    <p className='mx-auto text-[16px] text-center max-w-[300px] mb-2'>Create an account to enjoy all the services!</p>
                </div>

                <div className='pt-3 px-3'>
                    <form onSubmit={handleSignUpOnSubmit}>
                        <div className='grid grid-cols-2 gap-x-10 gap-y-6'>
                            <div>
                                <label htmlFor='OrgId' className='block pb-1'>Oraganization ID</label>
                                <input type='text' id='OrgId' name='OrgId' value={formValues.OrgId} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0 disabled:bg-gray-100 disabled:cursor-not-allowed ' />
                                {formErrors.OrgId && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.OrgId}</p>}
                            </div>
                            <div>
                                <label htmlFor='BranchCode' className='block pb-1'>Branch Code</label>
                                <input type='text' id='BranchCode' name='BranchCode' value={formValues.BranchCode} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                {formErrors.BranchCode && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.BranchCode}</p>}
                            </div>
                            <div>
                                <label htmlFor='B2CCustomerId' className='block pb-1'>Customer ID</label>
                                <input type='text' id='B2CCustomerId' name='B2CCustomerId' value={formValues.B2CCustomerId} onChange={handleSignUpOnchange} disabled className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0  disabled:bg-gray-100 disabled:cursor-not-allowed' />
                                {formErrors.B2CCustomerId && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.B2CCustomerId}</p>}
                            </div>
                            <div>
                                <label htmlFor='B2CCustomerName' className='block pb-1'>Customer Name</label>
                                <input type='text' id='B2CCustomerName' name='B2CCustomerName' value={formValues.B2CCustomerName} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                {formErrors.B2CCustomerName && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.B2CCustomerName}</p>}
                            </div>
                            <div>
                                <label htmlFor='EmailId' className='block pb-1'>Email</label>
                                <input type='email' id='EmailId' name='EmailId' value={formValues.EmailId} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                {formErrors.EmailId && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.EmailId}</p>}
                            </div>
                            <div>
                                <label htmlFor='Password' className='block pb-1'>Password</label>
                                <input type='password' id='Password' name='Password' value={formValues.Password} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                {formErrors.Password && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.Password}</p>}
                            </div>
                            <div>
                                <label htmlFor='AddressLine1' className='block pb-1'>Address Line1</label>
                                <input type='text' id='AddressLine1' name='AddressLine1' value={formValues.AddressLine1} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                {formErrors.AddressLine1 && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.AddressLine1}</p>}
                            </div>
                            <div>
                                <label htmlFor='AddressLine2' className='block pb-1'>Address Line2</label>
                                <input type='text' id='AddressLine2' name='AddressLine2' value={formValues.AddressLine2} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                            </div>
                            <div>
                                <label htmlFor='AddressLine3' className='block pb-1'>Address Line3</label>
                                <input type='text' id='AddressLine3' name='AddressLine3' value={formValues.AddressLine3} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                            </div>
                            <div>
                                <label htmlFor='MobileNo' className='block pb-1'>Mobile Number</label>
                                <input type='number' id='MobileNo' name='MobileNo' value={formValues.MobileNo} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                {formErrors.MobileNo && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.MobileNo}</p>}
                            </div>
                            <div>
                                <label htmlFor='CountryId' className='block pb-1'>Country Id</label>
                                <input type='text' id='CountryId' name='CountryId' value={formValues.CountryId} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                {formErrors.CountryId && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.CountryId}</p>}
                            </div>
                            <div>
                                <label htmlFor='PostalCode' className='block pb-1'>Postal Code</label>
                                <input type='text' id='PostalCode' name='PostalCode' value={formValues.PostalCode} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                {formErrors.PostalCode && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.PostalCode}</p>}
                            </div>
                            <div>
                                <label htmlFor='CreatedBy' className='block pb-1'>Created By</label>
                                <input type='text' id='CreatedBy' name='CreatedBy' value={formValues.CreatedBy} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                {formErrors.CreatedBy && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.CreatedBy}</p>}
                            </div>
                            <div>
                                <label htmlFor='CreatedOn' className='block pb-1'>Craeted On</label>
                                <input type='date' id='CreatedOn' name='CreatedOn' value={formValues.CreatedOn} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                {formErrors.CreatedOn && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.CreatedOn}</p>}
                            </div>
                            <div>
                                <label htmlFor='ChangedBy' className='block pb-1'>Changed By </label>
                                <input type='text' id='ChangedBy' name='ChangedBy' value={formValues.ChangedBy} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                {formErrors.ChangedBy && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.ChangedBy}</p>}
                            </div>
                            <div>
                                <label htmlFor='ChangedOn' className='block pb-1'>Change On</label>
                                <input type='date' id='ChangedOn' name='ChangedOn' value={formValues.ChangedOn} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                {formErrors.ChangedOn && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.ChangedOn}</p>}
                            </div>
                            <div>
                                <label htmlFor='FloorNo' className='block pb-1'>Floor No</label>
                                <input type='number' id='FloorNo' name='FloorNo' value={formValues.FloorNo} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                {formErrors.FloorNo && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.FloorNo}</p>}
                            </div>
                            <div>
                                <label htmlFor='UnitNo' className='block pb-1'>Unit No</label>
                                <input type='number' id='UnitNo' name='UnitNo' value={formValues.UnitNo} onChange={handleSignUpOnchange} className='block w-full h-[44px] border border-gray-400 rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                {formErrors.UnitNo && <p className='text-red-500 pl-3 my-[2px]'>{formErrors.UnitNo}</p>}
                            </div>
                            <div className='flex justify-start space-x-2 items-center'>
                                <input type='checkbox' id='IsActive' name='IsActive' onChange={handleSignUpOnchange} className='border border-gray-400 w-[16px] h-[16px] rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                <label htmlFor='IsActive' className=''>Active</label>
                            </div>
                            <div className='flex justify-start space-x-2 items-center'>
                                <input type='checkbox' id='IsApproved' name='IsApproved' onChange={handleSignUpOnchange} value={formValues.IsApproved} className='border border-gray-400 w-[16px] h-[16px] rounded-lg px-3 py-2 text-[16px] focus:outline-0 focus:ring-0' />
                                <label htmlFor='IsApproved' className=''>Approved</label>
                            </div>
                            <div className='col-span-2 mx-auto'>
                                <button type='submit' className=' text-[#FFF] text-center text-[18px] px-10 py-3 rounded-[8px] font-semibold bg-[#7f32e3]'>Create Account</button>
                                <div className='pt-4'>
                                    <p className='text-gray-500'>Already Have an Account? <Link to="/sign-in" className='underline'>Sign In</Link></p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )

}
export default SignUp