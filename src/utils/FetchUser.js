
import axios from 'axios'
import store from '@/store';
import { setUsers } from '@/slices/userslice';

export async function FetchData (){
      try {
        const {page}= store.getState().page;
        const res = await axios.get("http://localhost:4000/list", {
          params: {
            page,
            limit: 20
          }
        });
        console.log("Inside Setting users:",page, res.data.users);
        store.dispatch(setUsers(res.data.users));
      } catch (error) {
        console.error("Error:", error);
      }
};
 


export async function fetchUsers() {
  try {
     console.log("started")
      const filter = store.getState().filter;
      const {search}=store.getState().search;
      const {page}= store.getState().page;
      const response = await axios.get('http://localhost:4000/filter', {
          params: {
              search,
              ...filter,
              page,
          }
      });
      console.log("inside filtering",page,search,response.data);
      store.dispatch(setUsers(response.data));
  } catch (error) {
      console.error('Error fetching users:', error);
  }
}

  

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



   export const handleDelete = async (_id) => {
    try {
      const res = await axios.delete(`http://localhost:4000/delete/${_id}`);
      console.log("deleting")
      fetchUsers();
      console.log("deleted")
    } catch (err) {
      console.log(err);
    }
  };




  export const handleSave = async (_id,editedUser,setEditing) => {
    console.log(editedUser)
    try {
      const res = await axios.put(`http://localhost:4000/update/${_id}`, {editedUser});
      console.log(res.data); 
      setEditing(false); 
      fetchUsers();
    } 
    catch (err) {
      console.error(err);
    }
  };


  