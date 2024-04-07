import { Button } from "@/components/ui/button";


export function Page({setCurrentPage,currentPage}){
   return(
    <div className='w-full flex items-center justify-center gap-2 mt-4 mb-4'>
    <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>
    <span className='text-xl font-semibold'>{currentPage}</span>
    <Button onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
  </div>
   )
}