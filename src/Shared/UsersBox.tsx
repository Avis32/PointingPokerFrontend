import React, { ReactElement } from 'react'
import { User } from '../Models/User';
import UserBox from './UserBox';

interface Props {
    users: User[]
}

export default function UsersBox({users}: Props): ReactElement {
    return (
        <div>
            {users.map(user => <UserBox user={user}></UserBox>)}
        </div>
    )
}
