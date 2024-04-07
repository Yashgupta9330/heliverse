
import axios from 'axios'
import store from '@/store';
import { setUsers } from '@/slices/userslice';
import { toast } from "react-hot-toast"
import { BASE_URL } from '@/Api';
export async function FetchData (){
      try {
        const {page}= store.getState().page;
        const res = await axios.get(BASE_URL+"/list", {
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
      const response = await axios.get(BASE_URL+'/filter', {
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
      const response = await axios.get(BASE_URL+'/domain');
      const domains = response.data;
      console.log('Domains:', domains);
      setDomain(response.data);
    } catch (error) {
      console.error('Error fetching domains:', error);
    }
  };



   export const handleDelete = async (_id) => {
    try {
      const res = await axios.delete(BASE_URL+`/delete/${_id}`);
      console.log("deleting")
      fetchUsers();
      toast.success("user deleted successfully")
      console.log("deleted")
    } catch (err) {
      toast.error("Can't able to delete user")
      console.log(res.data);
    }
  };




  export const handleSave = async (_id,editedUser,setEditing) => {
    console.log(editedUser)
    try {
      const res = await axios.put(BASE_URL+`/update/${_id}`, {editedUser});
      console.log(res.data); 
      setEditing(false); 
      fetchUsers();
      toast.success("User data edited successfully")
    } 
    catch (err) {
      console.error(err);
      toast.error("Can't able to edit user")
    }
  };


  