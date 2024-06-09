import { Link, useNavigate } from "react-router-dom";
import './MatchSmallCard.scss'
export const MatchSmallCard =({id,teamName,team})=>{
    
    const otherTeamName = teamName ===team.team1 ? team.team2 : team.team1;
    const navigate = useNavigate();
    const navigateToOtherTeam = () => {
        navigate(`/teams/${otherTeamName}`);
      };
      const ismatchwon = teamName === team.winningTeam

    return (
        <div className={ismatchwon ? "MatchSmallCard woncard" : "MatchSmallCard losscard"}>
            <span>vs</span>
            <h3><Link to={`/teams/${otherTeamName}`} onClick={navigateToOtherTeam}>{otherTeamName}</Link></h3>
            <h5 className="matchresult">won by {team.winningTeam} by {team.margin} {team.wonBy} </h5>
        </div>
    )
}