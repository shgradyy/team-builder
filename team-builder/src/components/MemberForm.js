import React, { useState } from "react";
import teamMembers from './teamMembers';

const MemberForm = props => {
    console.log(props);
    const [member, setMember] = useState({ name: "", email: "", role: ""});

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: input.name
        };
        props.addNewMember(newMember);
    }


    return (
        <form onSubmit={submitForm}>
            <label htmlFor="Name">
                Member Name
            </label>
            <input
                type="text"
                name="name"
                placeholder="Enter Name Here"
                value={member.name}
                onChange={changeHandler}
            />
            <label htmlFor="email">
                Enter Email
            </label>
            <input
                type="email"
                name="email"
                placeholder="Type Email"
                value={member.email}
                onChange={changeHandler}
            />
            <label htmlFor="role">
                Member Role
            </label>
            <input
                type="text"
                name="role"
                placeholder="Enter Role Here"
                value={member.role}
                onChange={changeHandler}
            />
        </form>
      
        
    );
}
   
  
export default MemberForm;