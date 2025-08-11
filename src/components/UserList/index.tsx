import { toast } from 'react-toastify';

import { useGetUserDetails } from '../../apis/user/useGetUserDetails';
import { UserCard } from '../UserCard';

export const UserList = () => {
  const { data: users, isLoading, isError } = useGetUserDetails();

  if (isLoading) {
    toast.success('Loading Movies..');
  }

  if (isError) {
    toast.error('Failed to load movies.Please try again');
  }

  if (!users || users.length === 0) return <p>No users found.</p>;

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};
