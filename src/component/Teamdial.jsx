import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
 

export function TeamDial({ selectedUsers }) {
  const [teamName, setTeamName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Creating team", teamName, selectedUsers);
    try {
      const res = await axios.post("http://localhost:4000/team", {
        TeamName: teamName,
        selectedUsers
      });
      console.log("Response team", res.data.team._id);
      const id = res.data.team._id;
      navigate(`/team/${id}`); // Navigate to the team details page
    } catch (error) {
      console.error("Error creating team:", error);
      // Handle error if necessary
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Team</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Team</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Team Name
              </Label>
              <Input
                id="name"
                className="col-span-3"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create Team</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
