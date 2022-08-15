import React from "react";
import data from '../got.json';
import People from "./People";

class Tags extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activeHouse:"", 
        };
    }
     handleClick=(house)=>{
        this.setState({
            activeHouse:house,
        })
     }



    render(){
        let houseName= data.map(house=>house.name);
        let everyone;
        if(!this.state.activeHouse){
        everyone= data.reduce((acc,house)=>{
            acc= acc.concat(house.people);
            return acc;
        },[]);
    } else{
        everyone = data.find((house)=>house.name === this.state.activeHouse).people;
    }
        return (<>
        <div className="center">
          <ul className="tags">
         {houseName.map((house)=>(
            <li
            key={house}
            className={house === this.state.activeHouse ? 'hover':''}
             onClick={()=>this.handleClick(house)}
            >{house}</li>
         ))}
           </ul>
           </div>
           < People everyone={everyone} />
            </>
        )
    }
}
export default Tags;