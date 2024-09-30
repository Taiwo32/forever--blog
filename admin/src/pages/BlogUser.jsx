import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const BlogUser = () => {

  const [users, setUsers] = useState([]);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/user/user'); 
      setUsers(response.data.data.users); 
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Error fetching users');
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:9000/api/user/user/${userId}`);
      if (response.status === 204) {
        toast.success('User deleted successfully');
        fetchUsers(); // Refresh the user list after deletion
      } else {
        toast.error('Error deleting user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Error deleting user');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All Users</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-blue-800 scrollbar-hide'>
        <table className='w-full text-sm text-blue-500'>
          <thead className='text-sm text-white bg-blue-950 text-left uppercase '>
            <tr>
              <th scope='col' className='px-6 py-3'>User Name</th>
              <th scope='col' className='px-6 py-3'>Email</th>
              <th scope='col' className='px-6 py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className='bg-white border-b'>
                <td className='px-6 py-4'>{user.userName}</td>
                <td className='px-6 py-4'>{user.email}</td>
                <td className='px-6 py-4'>
                  <button
                    className='bg-red-600 text-white px-4 py-1 rounded'
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogUser;
