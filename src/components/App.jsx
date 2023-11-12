import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from '../data/user/user.json';
import data from '../data/data/data.json';
import friends from '../data/friends/friends.json';
import transactions from '../data/transactions/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        location={user.location}
        tag={user.tag}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
