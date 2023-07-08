import { useState } from "react";
import Admin from "./Admin";
import Student from "./Student";

function Main({data}){

    const people = [{
        id: 0, // Used in JSX as a key
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
      }, {
        id: 1, // Used in JSX as a key
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
      }, {
        id: 2, // Used in JSX as a key
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
      }, {
        id: 3, // Used in JSX as a key
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
      }, {
        id: 4, // Used in JSX as a key
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
      }];
      


      const listItems = people.map(person =>
        <div>
        {
          person.profession === "physicist" &&
        <li key={person.id}>
          <img
            // src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li> 
        }
        </div>
        
      );

    // useState 
    // let c = 0
    const [count,setCount] = useState(0)

    const [bool, setBool] = useState(false)

    console.log(count)

    const increment = () =>{
        setCount(count + 1) 
    }

    const decrement = () =>{
        
        setCount(count - 1)
        if(count === 0){
            setCount(0)
        }
    }
    const [user,setUser] = useState([
        {   
            id : 1,
            name : "ravi",
        },
        {   
            id : 1,
            name : "ravi",
     
        },
    ]
    )

    const handleClick = () =>{
        setBool(!bool)
    }

    return(
        <div>
            <h1>Students</h1>




            {/* <h1>COUNTER</h1> */}
            {/* <h1>Name {data.name}</h1>
            <h1>Age {data.age}</h1> */}
            <h1>Count : {count}</h1>

            <button className="btn" onClick={increment}>Increment</button>
            <button className="btn" onClick={decrement }>Decrement</button> 


            {/* {
                user.map(function student(std) {
                    return(
                        <h1>{std.name}</h1>
                    )
                })
            } */}

            {/* {
                user.map( (user) =>(
                        // <Student student={student}/>
                        <h1>{user.name}</h1>
                        )
                )
            } */}





            {listItems}

            {/* {
          
               
                // user.role == "admin" ? <Admin admin = {user} /> : <Student />
                bool ?  <Admin admin = {user} />  : <Student />
              

            } */}

            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Main;