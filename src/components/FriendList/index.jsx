// import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem';

const FriendList = friends => {
  return (
    <ul className="friend-list">
      <FriendListItem item={friends} />
    </ul>
  );
};

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   statsFollowers: PropTypes.number.isRequired,
//   statsViews: PropTypes.number.isRequired,
//   statsLikes: PropTypes.number.isRequired,
// };

export default FriendList;
