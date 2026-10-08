import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
 const activityArr= props.activityArr;
    const setActivityArr = props.setActivityArr

  return (
    <div className="bg-[#bbb4ea] border rounded-md p-2 flex-grow ">
      <h1 className="text-2xl font-medium  px-4 py-1">Today's Activity</h1>
         

          {activityArr.length === 0  ? <p>You haven't added any activity yet</p> : ""  }
      {activityArr.map((itm, i) => (
        <TodoItem id={itm.id} activity={itm.activity} i={i}  activityArr={activityArr} setActivityArr={setActivityArr}/>
      ))}
    </div>
  );
}

export default TodoList;
