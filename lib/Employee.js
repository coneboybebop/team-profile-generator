const inquirer = require('inquirer');

class Employee {

getName() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the employee name.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    }]).then(({ name }) => {
        this.employee = new Employee(name);

        this.getId();
      })
};

        
getId() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'id',
        message: 'Please enter your employee ID number.',
        validate: idInput => {
            if (idInput) {
                return true 
            } else {
                console.log('Please enter the employee id');
                return false;
            }
        }
    }]).then(({ name }) => {
        this.employee = new Employee(name);

        this.getEmail();
      })
}

getEmail() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the employee email address.',
        validate: emailInput => {
            if (emailInput) {
                return true
            } else {
                console.log('Please enter your email address');
                return false
            }
        }
    }]).then(({ name }) => {
        this.employee = new Employee(name);

        this.getRole();
      })
}

getRole() {
    inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: 'What is the employee role?',
        choices: ['Manager','Engineer','Intern']
        
    }])
}
}

module.exports = Employee;