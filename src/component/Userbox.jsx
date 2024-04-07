
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { handleDelete, handleSave} from '@/utils/FetchUser';

export function Userbox({ user,users,currentPage, setUsers, filters, searchQuery, setSelectedUsers,selectedUsers }) {
  const { first_name, last_name, email, gender, domain, available, avatar, _id } = user;
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ first_name, last_name, email, domain, available, gender });

  const userInfoFields = [
    { label: 'First Name', value: first_name, name: 'first_name' },
    { label: 'Last Name', value: last_name, name: 'last_name' },
    { label: 'Email', value: email, name: 'email' },
    { label: 'Gender', value: gender, name: 'gender' },
    { label: 'Domain', value: domain, name: 'domain' },
    { label: 'Available', value: available, name: 'available' },
  ];

  const handleEdit = () => {
    setEditedUser({ first_name, last_name, email, domain, available, gender });
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditedUser({ first_name, last_name, email, domain, available, gender });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDeleteUser = () => {
    handleDelete(_id, searchQuery, currentPage, filters, setUsers);
  };

  const handleSaveUser = () => {
    handleSave(_id, editedUser, searchQuery, filters, currentPage, setUsers, setEditing);
    setEditing(false);
  };

  const handleAdd = () => {
    console.log("selected users",selectedUsers,_id)
    // Check if the user's domain and availability are unique
    const isUniqueDomain = selectedUsers.some(userId => users.find(u => u._id === userId)?.domain === domain);
    const isUniqueAvailability = selectedUsers.some(userId => users.find(u => u._id === userId)?.available === available);
 
    if (!isUniqueDomain && !isUniqueAvailability){
      setSelectedUsers([...selectedUsers, _id]);
    } 
    else {
      console.log("User's domain or availability is not unique",selectedUsers);
    }
  };

  return (
    <div className="flex flex-col w-[350px] border rounded-xl p-2">
      {avatar && <img src={avatar} alt="user avatar" className="w-20 h-20 rounded-full mx-auto mb-4" />}
      <div className='flex flex-col gap-2 px-2 py-2'>
        {userInfoFields.map((field, index) => (
          <div key={index} className="w-full flex flex-start items-center">
            <span>{field.label}:</span>
            {editing ? (
              <input type="text" name={field.name} value={editedUser[field.name]} onChange={handleChange} />
            ) : (
              <span>{field.value}</span>
            )}
          </div>
        ))}
        <div className="w-full flex gap-2 px-2 py-2 text-xl font-semibold">
          {editing ? (
            <>
              <Button className='w-[45%]' onClick={handleSaveUser}>Save</Button>
              <Button className='w-[45%]' onClick={handleCancelEdit}>Cancel</Button>
            </>
          ) : (
            <>
              <Button className='w-[45%]' onClick={handleEdit}>Edit</Button>
              <Button className='w-[45%]' onClick={handleDeleteUser}>Delete</Button>
            </>
          )}
        </div>
        <div className="mt-4">
          <Button className="w-full" onClick={handleAdd}>Add to Team</Button>
        </div>
      </div>
    </div>
  );
}

export default Userbox;
