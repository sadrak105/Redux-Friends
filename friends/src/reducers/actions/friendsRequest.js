import { PENDING_FRIENDS, SUCCESS_FRIENDS, ERROR_FRIENDS } from './actionTypes';
import axios from 'axios';
export const friendsRequest = () => {
    const friends = axios.get('http://localhost:5000');
    
}