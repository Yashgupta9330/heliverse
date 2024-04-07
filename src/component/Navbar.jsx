import { Button } from "@/components/ui/button";
import { DialogDemo } from "./Dial";
import axios from 'axios'
import { TeamDial } from "./Teamdial";
 function Navbar({selectedUsers}){

    return(
      
        <div className="w-full  h-14 flex justify-between items-center  border px-4">
          <div className="text-red-600 text-2xl font-semibold leading-6">Heliverse</div>
          <div className="flex gap-2">
            <TeamDial />
            <DialogDemo/>
          </div>
        </div>
        
    )
}

export default Navbar;