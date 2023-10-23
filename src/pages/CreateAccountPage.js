import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import Button from '@mui/material/Button';

const CreateAccountPage = () =>
{
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const createAccount = async() => {
        try{
            if(password !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }

            await createUserWithEmailAndPassword(getAuth(),email,password);
            navigate('/main');
        }
        catch (e)
        {
            setError(e.message);
        }

    }
    return (
        <>
        <h1>Create Account</h1>
        {error && <p className="error">{error}</p>}
        <input
            placeholder="Your email address"
            value = {email}
            onChange={e => setEmail(e.target.value)} />
        <input 
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e => setPassword(e.target.value))}/>
         <input 
            type="password"
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={(e => setConfirmPassword(e.target.value))}/>
        <Button variant="contained" onClick={createAccount}>Create Account</Button>
        <Link to="/login">Already Have an account? Login in here</Link>
        </>
        
    );
}

export default CreateAccountPage;
