import React, { Component } from 'react';
import { Room } from '../Models/Room';
import UserBox from '../Shared/UserBox';
import EvaluationView from './EvaluationView';

interface Props {
    
}
interface State {
    room: Room,
}

export default class PointingPoker extends Component<any, State> {
    constructor(props: any){
        super(props);
        this.state = {
            room:{
                users: [
                    {
                        id:1,
                        username: 'Michał',
                        active: true
                    },
                    {
                        id:2,
                        username: 'Agnieszka',
                        active: false
                    },
                    {
                        id:3,
                        username: 'Właścicielka',
                        active: false
                    }
                ],
                possibleChoices: [1, 2, 3, 5, '?'],
            },
        }
    }

    render() {
        return (
            <div>
                <EvaluationView users={this.state.room.users}/>
            </div>
        )
    }
}

