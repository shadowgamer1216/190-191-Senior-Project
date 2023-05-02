import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import  Axios  from 'axios';
 
const Login = ({handleLogin}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const  getUser = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/api/getuser/" + email);
        const user = response.data
        handleLogin(user[0].viewonly);
      }
      catch (error) {
        console.error(error);
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
            sessionStorage.setItem('Auth Token', userCredential._tokenResponse.refreshToken)
            routeChange();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            <main >        
                <section>
                  
                    <div>                                            
                    <div class='HomePageBar'>
				              <nav className="navbar navbar-dark bg-maroon">
					              <label className="navbar-brand">ABSOLUTE MEDIA, INC.</label>
				              </nav>
			              </div>                      
                                                       
                        <form>                                              
                            <div>
                              <div>
                                <label htmlFor="email-address">
                                    Email address 
                                    </label>
                                    </div>

                                
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                              <div>
                                <label htmlFor="password">
                                    Password
                                    </label>
                                    </div>


                               
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button       
                                className='login-button'                             
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>
                       
                 
                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Login


