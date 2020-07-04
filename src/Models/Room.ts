import { User } from './User';
export interface Room{
    users: User[],
    possibleChoices: ArrayLike<string|number>
}