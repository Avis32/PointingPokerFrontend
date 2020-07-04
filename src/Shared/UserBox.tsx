import React, { ReactElement } from 'react'
import { User } from '../Models/User';

interface Props {
    user: User,
}

export default function UserBox(props: Props): ReactElement {
    return (
        <div>
            {props.user.username}<span>{props.user.evaluation}</span>
        </div>
    )
}
