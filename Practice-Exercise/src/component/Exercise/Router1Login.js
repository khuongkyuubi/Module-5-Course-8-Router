import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom"


const accounts = [
    {
        email: "admin@gmail.com",
        password: "letmein"
    }
]


function Router1Login() {
    const [account, setAccount] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = event => {
        setAccount({...account, [event.target.name]: event.target.value});
    }

    useEffect(() => {
        // console.log(account)
    }, [account]);

    const handleLogin = event => {
        // const error = {};
        event.preventDefault();
        let findAccount = accounts.find(acc => acc.email === account.email && acc.password === account.password)

        if (findAccount) {
            navigate("/welcome", {state: {email: findAccount.email}});
        } else {
            // error["name"] = "Wrong email or password";
            console.log(account);
        }
    }

    return (
        <div className="Left">
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email"
                       name="email"
                       id="email"
                       value={account.email}
                       onChange={handleChange}


                />
                <br/>
                <label htmlFor="password">Password</label>
                <input type="password"
                       name="password"
                       id="password"
                       value={account.password}
                       onChange={handleChange}
                />
                <br/>
                <button type={"submit"}>Login</button>
            </form>
        </div>
    );
}

export default Router1Login;