import { useState } from "react"

export const Form = () => {

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [select,setSelect] = useState('')
    const [description,setDescription] = useState('')
    const [radio,setRadio] = useState(false)
    const [disable,setDisable] = useState(false)


    const style = {
        width : "250px",
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            username,
            email,
            password,
            select,
            description,
            radio
        }   

        console.log(userData)

        setDisable(true)

        // console.log(email,password)
        // const form = e.target;
        // const formData = new FormData(form);

        // const formJson = Object.fromEntries(formData.entries());


        // console.log("Data ", formJson)
    }

    return (
        <form  method="post" className="container mt-5" onSubmit={handleSubmit} style={style}>
             <div className="form-group">
                
                <label>UserName
                <input name="username" 
                value={username} 
                type="text" 
                className="form-control" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                onChange={(e)=>setUsername(e.target.value)}
                  />

                  
                </label>
            </div>
            <div className="form-group">

                <label>Email address
                <input name="email" 
                value={email} 
                type="email" 
                className="form-control" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                onChange={(e)=>setEmail(e.target.value)}
                  />

                  
                </label>

                
            </div>
           
            <div className="form-group">
            <label>Password

            <select onChange={(e)=>setSelect(e.target.value)} name="select" class="form-control form-control-sm" value={select}>
                <option value="1">Small 1</option>
                <option value="2">Small 2</option>
                <option value="3">Small 3</option>
                <option value="4">Small 4</option>

            </select>
            </label>
                


            </div>
            <div className="form-group">
                <label>Password
                <input 
                name="password" 
                value={password}  
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                
                />
                </label>
            </div>

            <div className="form-group">
            <label>Example textarea
            <textarea className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} rows="3"></textarea>
            </label>

            <div className="form-check">
            <input className="form-check-input"  onChange={(e)=>setRadio(e.target.checked)} type="radio" value={radio} id="defaultCheck1"/>
            <label className="form-check-label" for="defaultCheck1">
                Default checkbox
            </label>
            </div>
        </div>

            <button type="submit" disabled={disable} className="btn btn-primary mt-2">Submit</button>

            <h1>UserName : {username}</h1>
            <h1>Email : {email}</h1>
            <h1>Password : {password}</h1>
            


        </form>
    )
}