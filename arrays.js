
let skills = ["HTML", "CSS", "JavaScript", "Python"];
console.log(skills);

skills.push("React");
console.log("After push:", skills);

skills.pop();
console.log("After pop:", skills);

for (let i = 0; i < skills.length; i++) { console.log(`Skill ${i + 1}: ${skills[i]}`);}
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);
