// Object destructure
const course={
    courseName:"Javascript",
    price:499,
    courseInstructor:"Hitesh"
}

//course.courseInstructor
const {courseInstructor:Instrutor}=course;
console.log(Instrutor)

//API
//JSON
{
    "name":"Hemant",
    "price":450,
    "courseName":"Javascript"
}