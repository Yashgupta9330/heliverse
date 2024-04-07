import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/slices/pageSlice";
import {useDispatch,useSelector} from 'react-redux';

export function Page(){
   const dispatch=useDispatch();
   const {page}=useSelector(state=>state.page);
   const handleIncrementClick = () => {
      dispatch(increment());
    };
  
    const handleDecrementClick = () => {
      dispatch(decrement());
    };

   return(
    <div className='w-full flex items-center justify-center gap-2 mt-4 mb-4'>
    <Button onClick={handleDecrementClick} disabled={page === 1}>Previous</Button>
    <span className='text-xl font-semibold'>{page}</span>
    <Button onClick={handleIncrementClick}>Next</Button>
  </div>
   )
}