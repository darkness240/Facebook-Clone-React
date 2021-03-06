import React from 'react'
import './Login.css';
import Button from '@material-ui/core/Button';
import { auth, provider } from '../utils/firebase';
import { actionTypes } from '../store/reducer/reducer'
import { useStateValue } from '../store/StateProvider';

function Login() {
    const [{user}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch(
                {
                    type: actionTypes.SET_USER,
                    user: result.user
                }
            )
            
        }).catch(error => {
            alert(error);
        })
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
            </div>
            <Button variant="contained" color="primary" onClick={signIn} type="submit" >
                Sign In
            </Button>
        </div>
    )
}

export default Login
