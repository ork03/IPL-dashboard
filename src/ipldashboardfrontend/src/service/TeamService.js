import axios from "axios";

const REST_BASE_URL = 'http://localhost:8081/team'

export const getATeam = (teamName) => axios.get(REST_BASE_URL+'/'+teamName);

export const getMatches =(teamName,year) => axios.get(REST_BASE_URL+'/'+teamName+'/Matches',{params:{year}});

export const getTeams =() => axios.get(REST_BASE_URL);