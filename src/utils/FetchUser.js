import { setUsers } from '@/slices/userslice';
import axios from 'axios'
import {useSelector,useDispatch } from 'react-redux';

export function FetchData (currentPage){
  return async () => {
    const dispatch=useDispatch();
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
      } catch (error) {
        console.error("Error:", error);
      }
    }
};



  export const fetchUsers = async (searchQuery,currentPage) => {
    return async (dispatch) => {
    const filters = useSelector(state => state.filter); 
    console.log(filters);
    try {
      const response = await axios.get('http://localhost:4000/filter', {
        params: {
          search: searchQuery,
          filters,
          page: currentPage,
        }
      });
      console.log("filtering",response.data)
      dispatch(setUsers(response.data));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
  };

  

  export const  fetchDomains = async (setDomain) => {
    try {
      const response = await axios.get('http://localhost:4000/domain');
      const domains = response.data;
      console.log('Domains:', domains);
      setDomain(response.data);
    } catch (error) {
      console.error('Error fetching domains:', error);
    }
  };



  export const handleDelete = async (_id,searchQuery,currentPage) => {
    try {
      const response = await axios.delete(`http://localhost:4000/delete/${_id}`);
      console.log("deleting")
      console.log(searchQuery, currentPage)
      fetchUsers(searchQuery, currentPage);
      console.log("deleted")
    } catch (err) {
      console.log(err);
    }
  };




  export const handleSave = async (_id,editedUser,searchQuery, filters, currentPage, setUsers,setEditing) => {
    console.log(editedUser)
    try {
      const res = await axios.put(`http://localhost:4000/update/${_id}`, {editedUser});
      console.log(res.data); 
      setEditing(false); 
      fetchUsers(searchQuery, filters, currentPage, setUsers);
    } 
    catch (err) {
      console.error(err);
    }
  };


  