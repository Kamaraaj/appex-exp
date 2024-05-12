const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const useFormValidate = () => {
    const signUpValidation = (formValue) => {
        const err = {};
        if (!formValue.OrgId) err.OrgId = "Please enter organization id";
        else if (formValue.OrgId != 3) err.OrgId = "Please enter valid organization id"
        if (!formValue.BranchCode) err.BranchCode = "Please enter branch code";
        // if (!formValue.B2CCustomerId) err.B2CCustomerId="Please enter customer id";
        if (!formValue.B2CCustomerName) err.B2CCustomerName = "Please enter customer name";
        if (!formValue.EmailId || !isValidEmail.test(formValue.EmailId)) err.EmailId = "Please enter valid email";
        if (!formValue.Password) err.Password = "Please enter password";
        if (!formValue.AddressLine1) err.AddressLine1 = "Please enter address";
        if (!formValue.MobileNo) err.MobileNo = "Please enter mobile number"
        if (!formValue.CountryId) err.CountryId = "Please Enter country id";
        if (!formValue.PostalCode) err.PostalCode = "Please enter postal code"
        if (!formValue.CreatedBy) err.CreatedBy = "please enter created by";
        if (!formValue.CreatedOn) err.CreatedOn = "Please enter created on";
        if (!formValue.ChangedBy) err.ChangedBy = "Please enter changed by";
        if (!formValue.ChangedOn) err.ChangedOn = "Please enter changed on";
        if (!formValue.FloorNo) err.FloorNo = "Please enter floor no";
        if (!formValue.UnitNo) err.UnitNo = "Please  enter unit no"
        return err
    }
    const signInValidation = (formValue) => {
        const err = {};
        if (!formValue.Username) err.Username = "Please enter valid user name";
        if (!formValue.Password) err.Password = "Please enter password";
        if (!formValue.OrgId) err.OrgId = "Please enter organization id";
        else if (formValue.OrgId != 3) err.OrgId = "Please enter valid organization id"
        if (!formValue.BranchCode) err.BranchCode = "Please enter branch code";
        return err
    }
    return { signUpValidation, signInValidation }
}

export default useFormValidate
