/* objects */

const pencil = {
  length: '1.5 inches',
  shape: 'hexagnol',
  diameter: '1/4 inch',
  write: function () {
    console.log(' I am reading something ');
  },
  erase: function () {},
  sharpen: function () {},
};

const newpencil = { ...pencil };

//
creating objects
1. using objects literal
2.using the new key word (constroctor function)
3. using objects.create()
4. using class

const student1= {
    firstName: 'Alex',
    lastName: 'lee',
    email: 'alex_lee@gmail.com',
    enroll: function {} {
        console.log('got enrolled in the group');
    },
    changeEmail: function {} {
        this,email = ('donald_trump_changed@gmail.com');
    },

};
 const student3 = Object.create {()};
 student3.firstName = 'chris';
 student3. lastName = 'lee';

 const student4 =  {};
 student4.firstName = 'anmol';
 student4. lastName = 'shikari';


 //
 constructor function 

 function student (firstName, lastName, )(
    this.firstName = firstname;
    this.lastName = lastName;
    this.email = email;

    function enroll () {
        console.log('Got enrolled in the program');
    };
    function changeEmail{} {
        this.email = '${this.firstName. toLowerCase()}_${this.lastName.toLowerCase()};_changed@gmail.com';};
    };

}

const student_a = new Student ('Alex', 'lee', 'alex_lee@gmail.com');
const studnet_b = new student('bob', 'marly', 'aleex_lee@gmail.com');