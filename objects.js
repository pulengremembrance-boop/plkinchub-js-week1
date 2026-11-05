
let student = {
  name: "Kgaugelo",
  track: "Developer",
  location: "Makhado",
  skills: ["JavaScript", "Python"],
  introduce: function() { return `I am ${this.name} from ${this.location}, ${this.track} track.`;}};

console.log(student.introduce())
console.log(student.skills[0])
student.age = 25
console.log(student)
