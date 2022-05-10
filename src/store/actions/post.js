import { LOAD_POSTS, TOGGLE_BOOKED } from '../types';
import { DATA } from '../../helpers/constants';

export const loadPosts = () => {
	return {
		type: LOAD_POSTS,
		payload: DATA
	}
}

export const toggleBooked = id => {
	return {
		type: TOGGLE_BOOKED,
		payload: id
	}
}
