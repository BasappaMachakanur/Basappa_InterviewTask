import {useState} from 'react'
import { Form, Link, useNavigate } from 'react-router-dom';
import './style.css'
const INITIAL_DATA = {
    name : "",
    password : ""
}
const LogInPage = ({setIsLoggedIn}) => {
    const [user,setUser] = useState(INITIAL_DATA);
    const [error,setError] = useState({...INITIAL_DATA})
    const navigate = useNavigate();
    const onChangeHandler = ({target : {name , value}}) => {
        setUser({...user,[name] : value})
        if(error.name || error.password) {
            setError({...INITIAL_DATA})
        }
    }
    const verifyUser = async (target) => {
        const res = await fetch("http://127.0.0.8:4080/user/login",{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            mode : 'no-cors',
            body : JSON.stringify({mobile_no : user.name , password : user.password})
        })
        console.log(res);
        const value = await  res.json();
        console.log(value)

    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(! user.name) {
            setError({...error,name : "please enter name"});
            // console.log(event.target.name);
            event.target.name.focus();
            return;
        } 
        if(! user.password) {
            setError({...error,password : "please enter password"});
            event.target.password.focus();
            return;
        }
        // verifyUser(event.target);
        navigate("/")
        setIsLoggedIn(true)

    }
    return <div className="login-page">
        <form onSubmit={onSubmitHandler}>
        <div className="login-container">
            <h2>Login HERE</h2>
            <div>
                <label htmlFor="name" className='form-label text-start d-block'>Your Name</label>
                <input onChange={onChangeHandler} value={user.name} className='form-control' type="text" id="name" name="name" />
                { error.name && <p className='text-danger text-start'>{error.name}</p>}
            </div>
            <div>
                <label htmlFor="name1" className='d-block text-start form-label'>Password</label>
                <input value={user.password} className='form-control' onChange={onChangeHandler} type="password" id="name1" name="password" />
                { error.password && <p className='text-danger text-start'>{error.password}</p>}
            </div>
            <div className='text-end'>
                <Link to="/forgotpassword" className='text-decoration-none'>Forgot Password</Link>
            </div>
            <div className='mt-3'>
                <button type="submit" className='btn btn-danger form-control'>Submit</button>
            </div>
            <div className='mt-3'>
                <Link className='text-decoration-none text-dark' to="/signup">Do you have account?<span className='text-primary'> Signup</span></Link>
            </div>
        </div>
        </form>
    </div>
}
export default LogInPage;