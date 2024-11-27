// src/components/UserItem.js
import React from 'react';
import PropTypes from 'prop-types';

// 사용자 한 명의 정보를 카드 형태로 표시하는 컴포넌트
const UserItem = ({ user }) => {
    return (
        <div className="user-card">
            <h3>{user.role} "<strong>{user.firstName} {user.lastName}</strong>"</h3>
            <p style={{ textAlign: 'left' }}><strong>ID:</strong> {user.username}</p>
            <p style={{ textAlign: 'left' }}><strong>Email:</strong> {user.email}</p>
            <p style={{ textAlign: 'left' }}><strong>Phone:</strong> {user.phoneNumber}</p>
            <p style={{ textAlign: 'left' }}><strong>Address:</strong> {user.address}</p>
            <p style={{ textAlign: 'left' }}><strong>Status:</strong> {user.active ? 'Active' : 'Inactive'}</p>
        </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
    }).isRequired,
};

export default UserItem;