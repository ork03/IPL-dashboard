import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './YearSelector.scss'
import { getATeam } from '../service/TeamService';
export const YearSelector =({teamName})=>{
    
    const [years,setYears] = useState([])
    
    function getAllYearsATeamPlayed(teamName){
        getATeam(teamName).then(res=>{
            //console.log(res.data.allYearsPlayed)
            setYears(res.data.allYearsPlayed);
            //console.log(years)
        })
    }
    
    useEffect(()=>{
        getAllYearsATeamPlayed(teamName);
    },[teamName,years])
    return (
        <ol className='YearSelector'>
            {years.map((year) =>(
            <li key={year}><Link  to={`/teams/${teamName}/Matches/${year}`}> {year}</Link>
            </li>
            ))}
        </ol>
    )
}