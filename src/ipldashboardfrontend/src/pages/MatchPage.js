import { useParams } from "react-router-dom"
import { MatchDetailCard } from "../components/MatchDetailCard";
import { useEffect, useState } from "react";
import { getMatches } from "../service/TeamService";
import './MatchPage.scss'
import { YearSelector } from "../components/YearSelector";
import { DashBoard } from "../components/DashBoard";
export const MatchPage =() =>{
    const {teamName,year} = useParams();
    const [matches,SetMatches] = useState([])
    useEffect(()=>{
        getTheMatches(teamName,year);
    },[teamName,year])
    function getTheMatches(teamName,year){
        console.log(year)
        getMatches(teamName,year).then((res)=>{
            //console.log(res.data)
            SetMatches(res.data)
        })
    }
    return (
    <div>
        <DashBoard />
        <div>
            <h1 className="heading">Matches</h1>
        <div className="MatchPage">
       
        
        <div className="yearselector">
            <h3>Select Year</h3>
            <YearSelector teamName={teamName}/>
        </div>
        <div>
        
        <h2 className="teamName">{teamName} matches in {year}</h2>
        {
            
            matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match}/>)
        }        
        </div>
    </div>    
        </div>
        </div>
    )
}