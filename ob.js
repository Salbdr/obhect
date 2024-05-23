// let user={

// Id:123456,
// name:"ahmad",
// email:"a@gmail.com",
// age:25,
// address:{
//     city:{
//         first:"Riyadh",
//         second:"Dammam",
//         street:123456,
//     },
//     },

//     skills:["skil 1","skill2","skill3"],

// };

// console.log(user.name);
// console.log(user);
// user.id=147;
// console.log(user.id);

// delete user.email;
// console.log(user);
// console.log(user.address.city);
// console.log(user.skills);
// console.log(user.address.city.first);
// console.log(user.skills[0]);
// console.log(user.skills[1]);

// ????????

//////////////////////////////////////////////////////////


characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

var fname=characters.filter(x=> x.eye_color==="blue");
console.log(fname[0].name);


var gen=characters.filter(x => x.mass>50);
console.log(gen[0].gender);

var height200=characters.filter(x => x.height>200);
console.log(height200)

let maleChar=characters.filter(x => x[2] ==="male");
console.log(maleChar);