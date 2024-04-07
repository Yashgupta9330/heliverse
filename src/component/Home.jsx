import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Userbox from './Userbox';
import { FetchData,fetchDomains,fetchUsers} from '../utils/FetchUser';
import { Page } from './Page';
import { Filter } from './Filter';
import { useSelector} from 'react-redux';
import InputName from './InputName';


function Home() {
 
  const [domain, setDomain] = useState([]);
  const filter = useSelector(state => state.filter);
  const { users } = useSelector(state => state.user);
  const {page}=useSelector(state=>state.page);
  const {search}=useSelector(state=>state.search);
  
  
  useEffect(() => {
    console.log("redux extract",page,search);
    Promise.all([fetchDomains(setDomain), FetchData()]);
  }, []);


  useEffect(() => {
     fetchUsers();
  }, [search,filter,page]);


  

  return (
    <>
      <div className='w-full flex justify-center items-center flex-col'>
        <InputName/>
        <Filter domain={domain} />
        <div className='w-full flex flex-wrap flex-start justify-center items-center gap-3'>
          {users.length > 0 && users.map((user, index) => (
            <Userbox key={index} user={user} />
          ))}
        </div>
        <Page/>
      </div>
    </>
  );
}

export default Home;
