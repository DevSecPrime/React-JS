import React from 'react'
import Card from './Card'
import { useState } from 'react';


// const Card =({props})=>{
//     let courses = props.courses
// }

//upper way is the another way to define 

const Cards = ({ courses, category }) => {

  // putting all data in one array--
  let allCourses = []; ///In starting the course is empty

  //in staring alll liked courses are empty..
  //so we have to store it in an array...

  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    //Return you a list of all courses received from/through the API response

    if (category === "All") {
      //jo category All hoi to .... badha data pass kri desu ....
      Object.values(courses).forEach((courseCategoryArray) => {
        courseCategoryArray.forEach((course) => {
          allCourses.push(course);
        })
      })
      return allCourses;
    }

    else {
      //khli specific category no data-array j pass kaesu 

      return courses[category];
    }

  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course) => {
          return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
        })
      }
    </div>
  )
}

export default Cards
