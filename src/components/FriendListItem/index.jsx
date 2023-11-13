import PropTypes from 'prop-types';
import style from './style.module.css';

const FriendListItem = ({ friend }) => {
  const status = friend.isOnline ? style.statusOnline : style.statusOffline;

  return (
    <li className={style.item}>
      <span className={status}>{friend.isOnline}</span>
      <img
        className={style.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={style.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default FriendListItem;
