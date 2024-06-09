import { useNavigate } from "react-router-dom"
import './DashBoard.scss'
export const DashBoard = () =>{
    const navigate = useNavigate();
    function NavigateTOHome(){
        navigate('/');
    }
    return(
        <div>
            <input type='button' className='dashboard' onClick={()=> NavigateTOHome()} value='Home' />

        </div>
    )
}