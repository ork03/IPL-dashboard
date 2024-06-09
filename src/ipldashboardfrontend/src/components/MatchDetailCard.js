import { Link, useNavigate } from "react-router-dom";
import './MatchDetailCard.scss';
export const MatchDetailCard =({id,match,teamName})=>{
    const otherTeamName = teamName ===match.team1 ? match.team2 : match.team1;
    const navigate = useNavigate();
    const navigateToOtherTeam = () => {
        navigate(`/teams/${otherTeamName}`);
      };
      const ismatchwon = teamName === match.winningTeam

    return (
        <div className={ismatchwon ? "MatchDetailCard woncard" : "MatchDetailCard losscard"} key={id}>
           
            <div className="matchdetails">

            <h3>Match</h3>
            <h3 className="matchvenue">at Venue {match.venue}</h3>
            <h3 className="matchdate">Date :{match.date}</h3>
           <span> vs </span><h3><Link to={`/teams/${otherTeamName}`} onClick={navigateToOtherTeam}>{otherTeamName}</Link></h3>
            <h4>won by {match.winningTeam} by {match.margin} {match.wonBy} </h4>
            </div>
            <div className="matchinnings">

            <h3>First Innings</h3>
            <p>{match.team1}</p>
            <h3>Second Innings</h3>
            <p>{match.team2}</p>
            <h3>Man of the match</h3>
            <p>{match.playerOfMatch}</p>
            <h3>Umpires</h3>
            <p>{match.umpire1} , {match.umpire2}</p>
            </div>
        </div>
    )
}