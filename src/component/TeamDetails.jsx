import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Userbox from "./Userbox";

export function TeamDetail() {
    const { id } = useParams(); 
    const [teamName, setTeamName] = useState('');
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetchTeamDetails();
    }, [id]); 

    const fetchTeamDetails = async () => {
        try {
            const response = await fetch(`http://localhost:4000/team/${id}`);
            const data = await response.json();

            if (response.ok) {
                const { team } = data;
                setTeamName(team.TeamName);
                setMembers(team.Members);
            } else {
                console.error("Error fetching team details:", data.message);
            }
        } catch (error) {
            console.error("Error fetching team details:", error);
        }
    };

    return (
        <div className='w-full flex justify-center items-center flex-col gap-3 mt-12'>
            <h2 className="text-3xl font-semibold">Team Name: {teamName}</h2>
            <h3 className="text-3xl">Members</h3>
            <div className='w-full flex flex-wrap flex-start justify-center items-center gap-3'>
                {members.map((user,key) => (
                    <Userbox user={user} key={key} />
                ))}
            </div>
        </div>
    );
}
