import {useNavigate} from 'react-router-dom'; 
import useUser from '../hooks/useUser';
import {getAuth, signOut} from 'firebase/auth';
import Button from '@mui/material/Button';


const HeaderPage = () => {
    const {user} = useUser();
    const navigate = useNavigate();
    return (
        <nav>
            <div className="main-body">
                <table>
                    <tr>
                        <td><h2>SensorData UI</h2></td>
                        <td></td>
                        <td>{user ? 'Current user:' + user.email : ''}</td>
                    </tr>

                </table>
                
                 
            </div>
           
            <div className="nav-right">
                { user 
                    ? <Button variant="contained" onClick={() => {
                        signOut(getAuth());
                        navigate('/main');
                    }}>Log Out</Button>
                    : <Button variant="contained" onClick={(() => {
                        navigate('/login');
                    })}>Log In</Button>
                }

            </div>
        </nav>
    )
}

export default HeaderPage;