import { useState } from "react"

export default function Form() {
    let[formData , setFormData] = useState({
        fullName:"",
        userName:""
    })

    // let handleNameChange = (event) =>{
        
    //     setFullName(event.target.value);
        
    // };

    // let handleUserChange = (event) =>{
    //     setUserName(event.target.value);
    // }
    let handleInputChange = (event) =>{
        let fieldName = event.target.name;
        let newValue = event.target.value;
        console.log(newValue);
        
        setFormData( (currData) => {
           
            return {...currData,[fieldName] :newValue};
        });
    };
    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName:"",
            userName:"",
            password:"",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="enter your full name" 
            type="text" 
            value={formData.fullName} 
            onChange={handleInputChange}
            id="username"
            name="fullName"
            />

            <label htmlFor="username">Full Name</label>
            <input placeholder="enter your user name" 
            type="text" 
            value={formData.userName} 
            onChange={handleInputChange}
            id="username"
            name="userName"
            />
            <br /><br />
            <label htmlFor="password">Password</label>
            <input placeholder="enter your password" 
            type="password" 
            value={formData.password} 
            onChange={handleInputChange}
            id="password"
            name="password"
            />
            <button>Submit</button>
        </form>
    )
}