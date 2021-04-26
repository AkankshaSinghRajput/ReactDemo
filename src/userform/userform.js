import{useState} from "react";
import axios from "axios";
import Userlist from "../userlist/userlist";

function Userform(){
const[userform, setUserform ]=useState({
    name:'ram',
    mobileNumber: 9999999999,
    email: "@gmail.com",
})

const [users, setUsers] = useState ([{name: "Akankshaa", mobileNumber: 9876598765}]);
    return(
        <div>
            <input value={userform.name} name="name" onChange={updateState}></input>
            <input value={userform.mobileNumber} name="mobileNumber" onChange={updateState}></input>
            <input value={userform.email} name="email" onChange={updateState}></input>
            <button onClick={save}>Save</button>

            <Userlist usersProp={users}></Userlist>
        </div>
    )


function save(){
    console.log(userform.name);
    console.log(userform.mobileNumber);
    console.log(userform.email);
    axios.post('http://localhost:8080/user', userform)
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}
function updateState(event){
    //console.log(event);
   
        const current = {...userform,
        [event.target.name]:event.target.value ,
    };
    console.log(current);
    
    setUserform( current);
   
}
}
export default Userform;