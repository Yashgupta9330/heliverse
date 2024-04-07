import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Userbox from './Userbox';
import { FetchData, fetchDomains, fetchUsers } from '../utils/FetchUser';
import { Page } from './Page';
import { Filter } from './Filter';
import { useSelector,useDispatch} from 'react-redux';
import axios from 'axios'
import { setUsers } from '@/slices/userslice';

function Home() {
  const dispatch=useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [domain,setDomain]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const filter = useSelector(state => state.filter); 
  const users = useSelector(state => state.user);
  console.log("redux user",users)
  useEffect(()=>{
    fetchDomains(setDomain);
    fetchData(currentPage);
  },[])
 
 const fetchData=async()=>{
  try {
    const res = await axios.get("http://localhost:4000/list", {
      params: {
        page: currentPage,
        limit: 20
      }
    });
    console.log("Response:", res);
    console.log("resposing")
    dispatch(setUsers(res.data.users));
    console.log("Setting users:", res.data.users);
  } 
  catch (error) {
    console.error("Error:", error);
  }
 }

  useEffect(() => {
     fetchUsers(searchQuery,currentPage);
  }, [searchQuery, filter,currentPage]);

  

  return (
    <>
      <div className='w-full flex justify-center items-center flex-col'>
      <Navbar  currentPage={currentPage} selectedUsers={selectedUsers}/>
      <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} domain={domain}/>
      <div className='w-full flex flex-wrap flex-start justify-center items-center gap-3'>
      {users.length > 0 && users.map((user, index) => (
      <Userbox key={index} user={user}  currentPage={currentPage} selectedUsers={selectedUsers} searchQuery={searchQuery} setSelectedUsers={setSelectedUsers}/>
      ))}
      </div>
       <Page setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </div>
    </>
  );
}

export default Home;
