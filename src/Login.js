import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import StoreIcon from '@mui/icons-material/Store';
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from './Firebase';

function Login() { 
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    const register = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            if (userCredential) {
                navigate('/');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <StoreIcon className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input 
                        type='text' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />

                    <h5>Password</h5>
                    <input 
                        type='password' 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />

                    <button 
                        type='submit' 
                        className='login__signInButton' 
                        onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button 
                    className='login__registerButton' 
                    onClick={register}
                >
                    Create your eShop Account
                </button>
            </div>
        </div>
    );
}

export default Login;

































// import React, { useState } from 'react';
// import './Login.css'
// import { Link, useNavigate } from "react-router-dom";
// import StoreIcon from '@mui/icons-material/Store';
// import {auth,signInWithEmailAndPassword, createUserWithEmailAndPassword} from "./Firebase.js";


// function Login() { 
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
    
//     const signIn = e => {
//         e.preventDefault();

//         auth
//             .signInWithEmailAndPassword(email, password)
//             .then(auth => {
//                 navigate('/');
//             })
//             .catch(error => alert(error.message))

//     }
//     const register = e => {
//         e.preventDefault();

//         auth
//             .createUserWithEmailAndPassword(email, password)
//             .then((auth) => {
//                 if (auth) {
//                     navigate('/');
//                 }
//             })
//             .catch(error => alert(error.message))

//     }
//     return (
//         <div className='login'> 
//             <Link to='/' style={{ textDecoration: "none" }}>
//                 <div className="login__logo">
//                     <StoreIcon className="login__logoImage" fontSize="large" />
//                     <h2 className="login__logoTitle">eSHOP</h2>
//                 </div>
//             </Link>

//             <div className='login__container'>
//                 <h1>Sign-in</h1>

//                 <form>
//                     <h5>E-mail</h5>
//                     <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

//                     <h5>Password</h5>
//                     <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

//                     <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
//                 </form>

//                 <p>
//                     By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
//                     see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
//                 </p>

//                 <button className='login__registerButton' onClick={register}>Create your eShop Account</button>
//             </div>
//         </div>
//     )
// }

// export default Login;



