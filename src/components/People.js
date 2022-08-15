function People(props){
    return(
   <ul className="cards">
   {props.everyone.map((person)=>{
    return(
        <li key={person.name}>
            <img src={person.image} alt={person.name} />
            <h2>{person.name}</h2>
            <p>{person.description}</p>
            <button><a href={person.wikiLink}>
                Know More!  </a></button>
        </li>
    )
   })}
   </ul>


    )
}
export default People;