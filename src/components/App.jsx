//import { useMemo } from 'react';
import { UserMenu } from './UserMenu';
import { useUser } from '../userContext.jsx';

export const App = () => {
  const { isLoggedIn } = useUser();

  return <div>{isLoggedIn && <UserMenu />}</div>;
};
