import logo from './absolutemedialogo.png';
import React, {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom'
import  Axios  from 'axios';
 
const Login = ({handleLogin}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const  getUser = async () => {
      try {
        const response = await Axios.get('http://localhost:3001/api/getuser/' + email);
        const user = response.data
        handleLogin(user[0].viewonly);
      }
      catch (error) {
        console.log(error);
      }

    };
    const routeChange = () => {
      let path = '/';
      navigate(path);
    };
       
    const onLogin = (e) => {
        getUser();
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            sessionStorage.setItem('Auth Token', userCredential._tokenResponse.refreshToken);
            sessionStorage.setItem('currentUser', auth.currentUser.email);
            routeChange();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
       
    }
 
    return(
        <>
            <div class='HomePageBar'>
                <nav className='navbar navbar-expand-lg navbar-dark bg-maroon'>
                    <img src={logo} className='mx-auto d-block' alt='logo' />
                </nav>
                
            </div>

            <div className='login-container mt-5'>
                <div class='row justify-content-center'>
                    <div class='col-md-4 p-5'>
                        <div class='card'>
                            <div class='card-body p-5'>
                                <h3 class='card-title text-center'>Login</h3>
                                <br></br>
                                <form className="form-login" onSubmit={onLogin}>
                                    <div className='form-group'>
                                        <label for="inputEmail" className="sr-only">Email address</label>
                                        <input 
                                            id='email-address' 
                                            type='email' 
                                            className='form-control'
                                            required autoFocus
                                            placeholder='Email Address' 
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label for="inputPassword" className="sr-only">Password</label>
                                        <input 
                                            id='password' 
                                            type='password' 
                                            className='form-control'
                                            required 
                                            placeholder='Password' 
                                            onChange={(e)=>setPassword(e.target.value)}
                                        />
                                    </div>
                                    <button className='login-button' type='submit'>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default Login


