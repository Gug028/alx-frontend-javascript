export default function getListStudentIds(arr) {
	if (Array.isarray(arr)) {
		return arr.map((obj) => obj.id);
	}
	return [];
}
