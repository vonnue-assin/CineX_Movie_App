import { toast } from 'react-toastify';

import { useGetUserDetails } from '../../apis/user/useGetUserDetails';
import { UserCard } from '../UserCard';

export const UserList = () => {
  const { data: users, isLoading, isError } = useGetUserDetails();

  if (isLoading) {
    toast.success('Loading User');
  }

  if (isError) {
    toast.error('Failed to load user.Please try again.');
  }

  if (!users || users.length === 0) return <p>No user found</p>;

  return (
    <>
      <div>
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </>
  );
};
