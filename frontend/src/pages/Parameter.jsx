import axios from 'axios';
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Parameter = () => {
    const { token } = useContext(UserContext)

    const deleteUser = () => {
        axios.delete(`http://localhost:5000/users/${token.id}`)
    }
    return (
        <div>
            <form>
                <label>Supression</label>
                <input type="submit" onClick={deleteUser} />
            </form>
        </div>
    );
};

export default Parameter;