import { Button } from "@/components/ui/button";
import { DialogDemo } from "./Dial";
import axios from 'axios'
import { TeamDial } from "./Teamdial";
import {useDispatch,useSelector} from 'react-redux';
 function Navbar(){
  const {members}=useSelector(state=>state.selectedUser);
    return(
      
        <div className="w-full  h-14 flex justify-between items-center  border px-4">
          <div className="text-red-600 text-2xl font-semibold leading-6">Heliverse</div>
          <div className="flex gap-4">
            <div className="relative">
            <TeamDial /><span className="text-sm absolute top-0">{members.length}</span>
            </div>
            <DialogDemo/>
          </div>
        </div>
        
    )
}

export default Navbar;