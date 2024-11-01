import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, name, email, phone } = user;

    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }

    return (
        <div style={userStyle}>
            <h2>{name} </h2>
            <p>Email:{email} </p>
            <p>Phone:{phone} </p>
            <Link to={`/user/${id}`}>User Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;