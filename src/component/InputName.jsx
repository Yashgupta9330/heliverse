import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from 'axios';
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
export default function InputName(){
    const [name,setName]=useState('');
    const [teams,setTeams]=useState([]);
    const navigate=useNavigate();

useEffect(()=>{
    fetchallteam();
},[])

const fetchallteam=async ()=>{
     try {
        const response = await axios.get('http://localhost:4000/allteam');
        console.log('API Response:', response.data);
        setTeams(response.data);
       } 
    catch (error) {
        console.error('Error:', error);
    }
};


const handle=(e)=>{
    e.preventDefault();
    console.log("teams",teams)
    const teamArray = Object.values(teams);
    console.log("team array",teamArray)
    const matchedTeam = teamArray[1].find(team => team.TeamName === name);
    if(matchedTeam) {
        navigate(`/team/${matchedTeam._id}`);
    } else {
        console.log('Team not found');
    }
}

  const handlechange=(e)=>{
    setName(e.target.value);
  }
    return(
        <div className="w-128 mt-12">
        <h2 className="mt-4 mb-4 text-xl font-semibold">Enter Team Name to Get Team details</h2>
        <div className="flex justify-center items-center gap-2">
        <Input className='w-full' placeholder="Enter Team Name" value={name} onChange={handlechange}/>
        <Button onClick={handle}>Enter</Button>
        </div>
        </div>
    )
}