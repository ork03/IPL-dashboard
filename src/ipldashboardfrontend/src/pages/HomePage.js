import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './HomePage.scss'
import { getTeams } from "../service/TeamService"
import './TeamPage.scss'

export const HomePage =()=>{
    const [teams,setTeam] = useState([])
    
    function getAllTeams(teamName){
        
        getTeams().then((res)=>{
            setTeam(res.data)
            console.log(res.data)
        })
        
    }
    useEffect(()=> getAllTeams(),[])
    
    return (
        <div className="HomePage">
           <div className="Header">
                <h1>IPL DashBoard</h1>
           </div>
           <div className="Teamsdisplay">
                {teams.map((team) =>(
                    <Link key={team.id} to={`/teams/${team.teamName}`}>
                        <h3>{team.teamName}</h3>
                    </Link>
                 ))}
            </div>       
        </div>
           
        
    )
}