interface DirectorInterface {
   workFromHome(): string;
   getCoffeeBreak(): string;
   workDirectorTasks(): string;
}

interface TeacherInterface{
   workFromHome(): string;
   getCoffeeBreak(): string;
   workDirectorTasks(): string;
}

class Director implements DirectorInterface {
workFromHome() {
      return 'Working from home';
   }

   getCoffeeBreak() {
      return 'Getting a coffee break';
   }

   workDirectorTasks() {
      return 'Getting to director tasks';
   }
}

class Teacher implements TeacherInterface {
   workFromHome() {
      return 'Cannot work from home';
   }

   getCoffeeBreak() {
      return 'Cannot have a break';
   }

   workDirectorTasks() {
      return 'Getting to work';
   }
}

function createEmployee(salary: number): Director | Teacher {
   if (typeof(salary) === 'number' && salary < 500) {
      return new Teacher();
   }
   return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
   return (employee instanceof Director) ? true : false;
}


function executeWork(employee: Director | Teacher): string {
   return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects): string{
   return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
} 
   console.log(teachClass('Math'));
   console.log(teachClass('History'));

