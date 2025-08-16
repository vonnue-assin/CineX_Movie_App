import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

import { useGetUserDetails } from '../../apis/user/useGetUserDetails';
import { UserCard } from '../UserCard';

export const UserList = () => {
  const { data: users, isLoading, isError } = useGetUserDetails();

  if (isLoading) {
    return (
      <div className="loader-container">
        <ClipLoader loading={isLoading} color="green" size={60} />
      </div>
    );
  }

  if (isError) {
    toast.error('Failed to load movies.Please try again');
    return <ClipLoader loading={isLoading} color="red" size={60} />;
  }

  if (users?.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div>
      {(users ?? []).map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};
