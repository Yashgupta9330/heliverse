import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import axios from "axios";
import { FetchData } from '@/utils/FetchUser';
import { Box } from './Field';

export function DialogDemo({ setUsers,currentPage }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [avatar, setAvatar] = useState('');
  const [domain, setDomain] = useState('');
  const [availability, setAvailability] = useState('');
  

  const fields = [
    { id: "firstName", label: "First Name", value: firstName },
    { id: "lastName", label: "Last Name", value: lastName },
    { id: "email", label: "Email", value: email },
    { id: "gender", label: "Gender", value: gender },
    { id: "avatar", label: "Avatar", value: avatar },
    { id: "domain", label: "Domain", value: domain },
    { id: "availability", label: "Availability", value: availability },
  ];
  
  const handleInputChange = (e, fieldId) => {
    const value  = e.target.value;
    switch (fieldId) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "avatar":
        setAvatar(value);
        break;
      case "domain":
        setDomain(value);
        break;
      case "availability":
        setAvailability(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const response = await axios.post("http://localhost:4000/add", {
          firstName,
          lastName,
          email,
          avatar,
          availability,
          domain,
          gender
        });
        FetchData(currentPage,setUsers);
        console.log(response.data); 
      } catch (error) {
        console.error("Error:", error); 
      }
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Data</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ADD Data</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
           {
            fields.map((field,key)=>(
            <Box field={field} key={key} handleChange={(ev)=>handleInputChange(ev,field.id)}/>
            ))
           }
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
