function Card(props){
    return(
         <div style={{backgroundColor:props.bgColor}} className='px-10 py-5 border rounded-md flex-grow text-center'>
      <h1 className=" font-medium text-2xl">{props.title}</h1>
      <p>{props.subTitle}</p>
     </div>
    )
}

export default Card