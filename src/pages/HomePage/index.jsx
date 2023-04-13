import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from '../../data/data.json'
import './style.css'
// const base_url = "http://interview.wpos.live";
const HomePage = ({isLoggedIn,setIsLoggedIn}) => {
    const [users,setUser] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if(! isLoggedIn) {
            navigate('/login');
        } else {
            setUser(data);
        }
    },[])
    return <div className="home-container">
        <div className="header">
            <div>
                <h2>Welcome</h2>
                <p>User Name : --</p>
                <p>User ID : --</p>
            </div>
            <div>
                <button onClick={() => {navigate('/login')
                 setIsLoggedIn(false)}} className="btn btn-sm btn-danger">Logout</button>
            </div>
        </div>
        <div className="table-container">
            <div className="row p-2 rounded mb-2 bg-light align-items-center">
                <div className="col">User Name</div>
                <div className="col">user ID</div>
                <div className="col">Mobile</div>
                <div className="col"></div>
            </div>
            {
                users?.map(user => <div key={user.userId} className="row p-2 rounded bg-light align-items-center">
                <div className="col">{user.name}</div>
                <div className="col">{user.userId}</div>
                <div className="col">{user.phone}</div>
                <div className="col"><button className="btn btn-sm btn-secondary">Edit</button>
                <button className="btn btn-sm btn-danger ms-1">Delete</button>
                </div>
            </div>)
            }
        </div>
    </div>
}
export default HomePage;