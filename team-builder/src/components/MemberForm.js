import React, { useState } from "react";
import teamMembers from './teamMembers';

const MemberForm = props => {
    console.log(props);
    const [member, setMember] = useState({ name: "", email: "", role: ""});

    const changeHandle = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const submetForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: input.name
        };
        props.addNewMember(newMember);
    }


    return (
        <form>
            <label htmlFor="name" hidden>
                Member Name
            </label>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter Name Here"
                onChange={event => {
                    console.log(event.target.value);
                    SVGFEDistantLightElement(event.target.value);
                }}
        
        </form>
    )
}
   
  
export default MemberForm;