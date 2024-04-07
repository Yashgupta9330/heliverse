import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function TeamDetail() {
    const { id } = useParams(); 
    const [teamName, setTeamName] = useState('');
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetchTeamDetails();
    }, [id]); // Include teamId in the dependency array to re-fetch data when it changes

    const fetchTeamDetails = async () => {
        try {
            // Fetch team details from the backend using the provided teamId
            const response = await fetch(`http://localhost:4000/team/${id}`);
            const data = await response.json();

            if (response.ok) {
                // Extract team name and members from the response
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
        <div>
            <h2>Team Name: {teamName}</h2>
            <h3>Members:</h3>
            <ul>
                {members.map(member => (
                    <li key={member._id}>
                        <div>First Name: {member.first_name}</div>
                        <div>Last Name: {member.last_name}</div>
                        <div>Email: {member.email}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
