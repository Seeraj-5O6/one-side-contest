import React,{Fragment} from "react";

import Provider from "./provider.js";
import Context from "./context.js";

const Agents=()=>{

return <AgentOne/>

}

const AgentOne=()=>{

  return <AgentTwo/>
  
  }

  const AgentTwo=()=>{

    return <AgentBond/>
    
    }

    const AgentBond=()=>{

      return(
<Context.Consumer>{

(context)=>(

  <Fragment>
<h3>Agent Infomation</h3>
<p>Mission Name:{context.data.mname}</p>
<h1>Mission Status:{context.data.accept}</h1>

<button onClick={context.isMissionAccepted}>Choose to Accept</button>

  </Fragment>
)
    }
</Context.Consumer>


      )
      
      }




const App=()=>{



  return(
    <div>

      <h1>Context API</h1>
      <Provider>
        <Agents/>
      </Provider>
    </div>
  )
}


export default App;