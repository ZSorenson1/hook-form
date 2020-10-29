import { render } from '@testing-library/react';
import React, { useState } from  'react';

const MyForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [firstnameError, setfirstnameError] = useState("");

    const [lastName, setlastName] = useState("");
    const [lastnameError, setlastnameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setpasswordError] = useState("");

    const [cpassword, setcPassword] = useState("");
    const [cpasswordError, setcpasswordError] = useState("");

    const handlefirstName = (e) => {
        setfirstName(e.target.value);
        if(e.target.value.length < 2) {
            setfirstnameError("First Name must be at least 2 characters");
        } else {
            setfirstnameError("");
        }
    }

    const handlelastName = (e) => {
        setlastName(e.target.value);
        if(e.target.value.length < 2) {
            setlastnameError("Last Name must be at least 2 characters");
        } else {
            setlastnameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setemailError("Email must be at least 5 characters");
        } else {
            setemailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setpasswordError("password must be at least 8 characters");
        } else {
            setpasswordError("");
        }
    }
    const handlecPassword = (e) => {
        setcPassword(e.target.value);
        
        if(e.target.value != password ) {
            setcpasswordError("passwords must match");
        } else {
            setcpasswordError("");
        }
    }

    

    return(
        <div>
            <form action="">
                <p>First Name: <input type="text" onChange= {handlefirstName}/></p>
                {
                    firstnameError ?
                    <p>{firstnameError}</p> :
                    ''
                }
                <p></p>
                <p>Last Name: <input type="text" onChange= {handlelastName}/></p>
                {
                    lastnameError ?
                    <p>{lastnameError}</p> :
                    ''
                }
                <p>Email: <input type="text" onChange= {handleEmail}/></p>
                {
                    emailError ?
                    <p>{emailError}</p> :
                    ''
                }
                <p>Password: <input type="password" onChange= {handlePassword}/></p>
                {
                    passwordError ?
                    <p>{passwordError}</p> :
                    ''
                }
                <p>Confirm Password: <input type="password" onChange= {handlecPassword}/></p>
                {
                    cpasswordError ?
                    <p>{cpasswordError}</p> :
                    ''
                }
            </form>
            <h4>Form Info:</h4>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {cpassword}</p>
        </div>
    );
};

export default MyForm;