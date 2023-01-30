
import { useState } from "react";

function Login() {
    // ============(Second Steps >> store user values into state (useState))===============
    const [userData, setUserData] = useState({
        Email: "",
        Pass: ""
    })
    const [errors, setErrors] = useState({
        EmailErr: "",
        PassErr: ""
    })
    const changeData = (e) => {
        console.log(e.target.value)
        if (e.target.name == "userEmail") {
            setUserData({
                ...userData,
                Email: e.target.value
            })

            setErrors({
                ...errors,
                EmailErr: e.target.value.length == 0 ? "required Email" : e.target.value = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value) && "Email is not correct "
            })
        } else {
            setUserData({
                ...userData,
                Pass: e.target.value
            })

            setErrors({
                ...errors,
                PassErr: e.target.value.length == 0 ? "required pass" : e.target.value.length < 8 && "Error Pass is less than 8"
            })
        }

    }

    const submitUserData = (e) => {
        console.log("submit")
        e.preventDefault()
    }

    return (
        <>
            {/*=========================first steps >> create your form bootstrap ==============*/}
            <div style={{  }} className="m-4">
                <h1 className="text-center"> Login ...</h1>
                <form className="form-control">
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input name="userEmail" className={`form-control ${errors.EmailErr && "border border-danger"}`} type="text" value={userData.Email} onChange={(e) => changeData(e)} />
                        <p className="text-danger"> {errors.EmailErr}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input name="userpass" className="form-control" value={userData.Pass} onChange={(e) => changeData(e)} />
                        <p className="text-danger"> {errors.PassErr}</p>

                    </div>
                    <button disabled={errors.PassErr || errors.EmailErr && "disabled"} className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
            <hr />
            <hr />
        </>
    )
}
export default Login;
