import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSIgnup(firstName, lastName, fileName) {
	return Promise.allSettled([signUpUser(firstName, lastName, fileName) {
		.then((results) => results.map((result) => ({
			status: result.status,
			value: result.status === 'fulfilled' ? result.value : String(result.reason),
		})));
}
