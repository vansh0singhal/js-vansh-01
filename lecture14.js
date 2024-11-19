//+++++++++++++++++++object destructuring+++++++++++++++++//////

const course={
    coursename:"js hindi",
    price:"999",
    courseInstructor:"Hitesh Chaudhary"
}
course.courseInstructor

//2nd way of access

const {courseInstructor}=course
console.log(courseInstructor)
//if we want to give name to courseinstrtuctor
const {courseInstructor:instructor}=course
console.log(instructor)
//Hitesh Chaudhary
//so now we can acces the name by using just name instructor

