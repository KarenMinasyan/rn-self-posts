import { LOAD_POSTS } from '../types';
import { DATA } from '../../helpers/constants';

export const loadPosts = () => {
	return {
		type: LOAD_POSTS,
		payload: DATA
	}
}
