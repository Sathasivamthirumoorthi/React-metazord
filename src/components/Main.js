import { useState } from "react";
import Student from "./Student";


function Main({data}){

    // useState 
    let c = 0
    const [count,setCount] = useState(0)
    console.log(count)

    const increment = () =>{
        // setCount(count + 2)
        // c = c + 1
    }

    const decrement = () =>{
        
        // setCount(count - 1)
        // if(count === 0){
        //     setCount(0)
        // }
        // c = c - 1
    }
    const [students,setStudents] = useState([
        {   
            id : 1,
            name : "ravi",
            rol : 1

        },
        {
            id : 2,   
            name : "siva",
            rol : 2

        }, {   
            id : 3,
            name : "rohi",
            rol : 3

        }, {   
            id : 4,
            name : "surya",
            rol : 4

        }, 
        {   
            id : 5,
            name : "john",
            rol : 5

        }, 
        {   
            id : 6,
            name : "nikil",
            rol : 6

        },
    ])
    
    console.log(students)
    return(
        <div>
            <h1>Students</h1>
            {/* <h1>COUNTER</h1> */}
            {/* <h1>Name {data.name}</h1>
            <h1>Age {data.age}</h1> */}
{/* 
            <h1>Count : {count} and {c}</h1>

            <button className="btn" onClick={increment}>Increment</button>
            <button className="btn" onClick={decrement }>Decrement</button> */}


            {/* {
                students.map(function student(std) {
                    return(
                        <h1>{std.name}</h1>
                    )
                })
            } */}

            {
                students.map( (student) =>(
                        <div className="mt-5">
                        <Student student = {student}/>
                        </div>
                    )
                )
            }


        </div>
    )
}

export default Main;