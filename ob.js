let user={

Id:123456,
name:"ahmad",
email:"a@gmail.com",
age:25,
address:{
    city:{
        first:"Riyadh",
        second:"Dammam",
        street:123456,
    },
    },

    skills:["skil 1","skill2","skill3"],

};

console.log(user.name);
console.log(user);
user.id=147;
console.log(user.id);

delete user.email;
console.log(user);
console.log(user.address.city);
console.log(user.skills);



