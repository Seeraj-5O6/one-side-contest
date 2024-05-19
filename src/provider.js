import React,{useState} from "react";

import Packagecontext from "./context";


const Provider=(props)=>{

const[mission, setMission]=useState({
    mname:"Go to USA",
    agent:4455,
    accept: "not accepted"


})


return(


    <Packagecontext.Provider  value={{data:mission,
                             isMissionAccepted:()=>{
                                setMission({...mission,accept:"Accepted"})
                                }}
                            }
    >

        {props.children}
    </Packagecontext.Provider>
)


}


export default Provider;