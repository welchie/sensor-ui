import Button from '@mui/material/Button';

const ButtonComp = () =>
{
    return (
        <>
    <Button variant="contained" 
    onClick={() => {
        alert('Hello World!');
      }}>Hello world</Button>
    </>);  
}

export default ButtonComp;