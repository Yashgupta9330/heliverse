import { Button } from "@/components/ui/button";
import { DialogDemo } from "./Dial";
import axios from 'axios'
import { TeamDial } from "./Teamdial";
 function Navbar({setUsers,currentPage,selectedUsers}){

  /*const deletealluser = async ()=>{
    try {
        console.log("deleting")
        const response = await axios.delete('http://localhost:4000/deleteAllUsers');
        console.log(response.data); 
        return response.data; 
      } catch (error) {
        console.error('Error deleting all users:', error);
        throw error; 
      }    
  } */
    return(
      
        <div className="w-full  h-14 flex justify-between items-center  border px-4">
          <div className="text-red-600 text-2xl font-semibold leading-6">Heliverse</div>
          <div className="flex gap-2">
            <TeamDial selectedUsers={selectedUsers}/>
            <DialogDemo setUsers={setUsers}  currentPage={currentPage}/>
          </div>
        </div>
        
    )
}

export default Navbar;