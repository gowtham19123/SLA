import { useState } from "react";
import TextInput from "./Inputtext";

export default function Signup(){
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [pwd,setpwd] = useState('');

    const[submiteddata,setsubmiteddata] = useState(null);

    const isvalidemail = (text) => {
        const emailreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailreg.test(text);

    };

    const isforminvalid = !name.trim() || !pwd.trim() || !isvalidemail(email) ;

    const handlesubmit = (e) =>{
        e.preventDefault();
        
        setsubmiteddata( {
           Name:name,Email:email,Password:pwd
        });
      setname('');
      setemail('');
      setpwd('');
    };

    const Clearform = () =>{
        setname('');
      setemail('');
      setpwd('');

    };
    return(
        <div>
            <form onSubmit={handlesubmit}>

            <TextInput label="Name" type="text" value={name} onChange={(e) => setname(e.target.value)}/>
            <TextInput label="Email" type="email" value={email} onChange={(e) => setemail(e.target.value)}/>
            <TextInput label="Password" type="password" value={pwd} onChange={(e) => setpwd(e.target.value)}/>

            <button type="submit" disabled={isforminvalid} >Sign up</button>{' | '}
            <button type="button" onClick={Clearform}>Clear</button>
            </form>
            {submiteddata && (
                <div>
                  <h1> Control panel </h1>
                  <p><strong>Name:</strong>{submiteddata.Name}</p>
                  <p><strong>Email:</strong>{submiteddata.Email}</p>
                  <p><strong>password:</strong>{submiteddata.Password}</p>
                </div>

            )}
        </div>
    );
}