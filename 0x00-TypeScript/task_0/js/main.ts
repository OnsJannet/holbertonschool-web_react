interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Taylor',
	lastName: 'Swift',
	age: 31,
	location: 'USA'
}

const student2: Student = {
	firstName: 'Camila',
	lastName: 'Cabello',
	age: 24,
	location: 'USA'
}

const studentList: Array<Student> = [student1, student2];
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((object) => {
	const row = document.createElement('tr');
	const CName = document.createElement('td');
	const CLocation = document.createElement('td');
	CName.textContent = object.firstChild;
	CLocation.textContent = object.location;
	row.appendChild(CName);
	row.appendChild(CLocation);
	tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
