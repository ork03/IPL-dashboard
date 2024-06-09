import { useEffect, useState } from "react"
import { MatchDetailCard } from "../components/MatchDetailCard"
import { MatchSmallCard } from "../components/MatchSmallCard"
import { useParams,Link } from "react-router-dom"
import { getATeam } from "../service/TeamService"
import './TeamPage.scss'
import { PieChart } from 'react-minimal-pie-chart';
import { DashBoard } from "../components/DashBoard"

export const Teampage =()=>{
    const [team,setTeam] = useState({matches:[]})
    const {teamName} = useParams();
    const [year,setYear] = useState([]);
    useEffect(
        ()=>{
           getTeams(teamName);
            },[teamName]
    )
    function getTeams(teamName){
        //console.log(teamName)
        getATeam(teamName).then((res)=>{
            setTeam(res.data)
            setYear(res.data.allYearsPlayed)
        })
    }
    const lastYear = year.length > 0 ? year[year.length - 1] : null;
    if(!team || !team.teamName){
        return <h1>Team Not Found</h1>
    }
    return (
        <>
        <div className="dashboard">
            <DashBoard/>
        </div>
        
        <div className="TeamPage">
            
           <div className="teamName">
           <h2>{teamName}</h2>
           </div>
            <div className="wins-loss">
                Wins/Loses
                <PieChart
                    data={[
                        { title: 'Losses', value: team.totalMatches - team.totalWins, color: 'red' },
                        { title: 'Wins', value: team.totalWins, color: 'green' },
                    ]}
                    />;
            </div>
            <div className ="matchdetailcard">
            <MatchDetailCard teamName ={teamName} match={team.matches[0]}/>
              </div>  
            {team.matches.slice(1).map(team => <MatchSmallCard key={team.id} teamName ={teamName} team={team}/>)}
            <div className="more">
                <Link to={`/teams/${teamName}/Matches/${lastYear}`}>More &gt; </Link>
                </div>
        </div>
                    </>
    )
}