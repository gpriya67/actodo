import { MdDeleteOutline } from "react-icons/md";

function TodoItem(props) {


    const activityArr= props.activityArr;
    const setActivityArr = props.setActivityArr

    const handleDelete = (id) =>{
    const removedArr = activityArr.filter((itm) =>(itm.id !== id))
    console.log(removedArr)
    setActivityArr(removedArr)
    }
  return (
    <div className="flex justify-between px-4 py-1">
      <p key={props.i}>
        {props.i + 1} .{props.activity}
      </p>
      <button className="text-red-500 cursor-pointer hover:bg-red-100 px-4 py-2 rounded-2xl" onClick={() => handleDelete(props.id)}>
        <MdDeleteOutline/>
      </button>
    </div>
  );
}

export default TodoItem;
