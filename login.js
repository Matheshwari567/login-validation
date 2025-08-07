import { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState({});
    useEffect(() => {
        const details = [
            { Sno: 1, Name: "Matheshwari", Password: 13456, Age: 23, Gender: "Female", Place: "Tenkasi" },
            { Sno: 2, Name: "Manushika", Password: 78901, Age: 24, Gender: "Female", Place: "Chennai" },
            { Sno: 3, Name: "Uma devi", Password: 23456, Age: 22, Gender: "Female", Place: "Salem" },
            { Sno: 4, Name: "vinoth", Password: 89012, Age: 27, Gender: "Male", Place: "Madurai" },
            { Sno: 5, Name: "ruby", Password: 34567, Age: 29, Gender: "Female", Place: "Kanniyakumari" },
            { Sno: 6, Name: "kavitha", Password: 90231, Age: 25, Gender: "Female", Place: "Tirunelveli" },
        ];
        sessionStorage.setItem("details", JSON.stringify(details));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        setError(errors);

        if (Object.keys(errors).length === 0) {
            const login = JSON.parse(sessionStorage.getItem("details"));
            const user = login.find(
                ({ Name, Password }) => Name === name && Password.toString() === pass
            );

            if (user) {
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("pass", pass);
                navigate("/table");
            } else {
                alert("Invalid username or password.");
                setName("");
                setPass("");
            }
        }
    };

    const handleValidation = (e) => {
        const { name: field, value } = e.target;
        let newErrors = { ...error };

        if (field === "name") {
            if (!value.trim()) {
                newErrors.name = "Please fill the username";
            } else if (value.trim().length < 5) {
                newErrors.name = "Username must be at least 5 characters";
            } else {
                delete newErrors.name;
            }
        }

        if (field === "pass") {
            if (!value.trim()) {
                newErrors.pass = "Please fill the password";
            } else if (value.length < 5) {
                newErrors.pass = "Password must be at least 5 characters";
            } else {
                delete newErrors.pass;
            }
        }
        setError(newErrors);
    };

    const validate = () => {
        const errors = {};
        if (!name.trim()) {
            errors.name = "Please fill the username";
        }
        if (!pass.trim()) {
            errors.pass = "Please fill the password";
        } else if (pass.length < 5) {
            errors.pass = "Password must be at least 5 characters";
        }
        return errors;
    };

    return (
        <div className="container">
            <form className="fom" onSubmit={handleSubmit}>
                <h1 className="h1">Login</h1>

                <label className="lab">UserName</label><br />
                <input
                    className="inp"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={handleValidation}
                />
                <div><span style={{ color: 'red' }}>{error.name}</span></div>

                <br/>

                <label className="lab">Password</label><br />
                <input
                    className="inp"
                    type="password"
                    name="pass"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    onBlur={handleValidation}
                />
                <div><span style={{ color: 'red' }}>{error.pass}</span></div>
                <br />
                <button className="but" type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;