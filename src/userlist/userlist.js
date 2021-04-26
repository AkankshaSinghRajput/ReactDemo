import { useState } from "react";


export default function Userlist(props){
    const [user, setUser] = useState ([{name: "Akankshaa", mobileNumber: 9876598765}]);

    return(
        <ol>
            {props.usersProp.map(function(user,index){
                return <li>{user.name}  {user.mobileNumber}</li>
            })}
            
        </ol>
    )
}