"use client";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("All");
  // 1. Input deer task bicheed add darahad nemegddeg baih --- Success
  // 2. Taskiin hajuud baih delete darahad ustah -- SUCCESS
  // 3. checkbox darahad completed boloh -- Success
  // 4. Taskig statusar filter hiih -- Success
  const displayTasks = tasks.filter((task) => {
    if (currentFilter == "All") {
      return true;
    } else if (currentFilter == "Active") {
      console.log(!task.isCompleted);
      return !task.isCompleted;
    } else if (currentFilter == "Completed") {
      return task.isCompleted;
    }
  });
  const handleToggleCheckBox = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id == id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };
  const handleAddTask = () => {
    setTasks([
      ...tasks,
      { task: value, isCompleted: false, id: Math.random() },
    ]);
    setValue("");
  };

  const handleActiveFilter = () => {
    setCurrentFilter("Active");
  };
  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => id != task.id);
    setTasks(filteredTasks);
    console.log("filteredTasks", filteredTasks);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center gap-8 py-16 px-4">
      <h1 className="text-3xl font-bold text-slate-800">Todo List</h1>
      <div className="flex justify-center gap-3 w-full max-w-md">
        <input
          className="flex-1 h-11 px-4 border border-slate-300 rounded-xl shadow-sm text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
          placeholder="What needs to be done?"
          value={value}
          onChange={() => {
            handleChangeValue(event);
          }}
        />
        <button
          onClick={handleAddTask}
          className="h-11 px-5 rounded-xl bg-violet-500 text-white font-medium shadow-sm hover:bg-violet-600 transition-colors"
        >
          Add
        </button>
      </div>
      <div className="flex gap-8">
        <button
          onClick={() => {
            setCurrentFilter("All");
          }}
          className={`${currentFilter == "All" ? `bg-violet-500` : `bg-amber-200`} h-11 px-5 rounded-xl  text-white font-medium shadow-sm  transition-colors`}
        >
          All
        </button>
        <button
          onClick={() => {
            handleActiveFilter();
          }}
          className={`${currentFilter == "Active" ? `bg-violet-500` : `bg-amber-200`} h-11 px-5 rounded-xl  text-white font-medium shadow-sm  transition-colors`}
        >
          Active
        </button>
        <button
          onClick={() => {
            setCurrentFilter("Completed");
          }}
          className={`${currentFilter == "Completed" ? `bg-violet-500` : `bg-amber-200`} h-11 px-5 rounded-xl  text-white font-medium shadow-sm  transition-colors`}
        >
          Completed
        </button>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-md">
        {displayTasks.map((task, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm gap-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => {
                    handleToggleCheckBox(task.id);
                  }}
                  className="h-5 w-5 accent-violet-500 shrink-0"
                />
                <span className="truncate text-slate-700">{task.task}</span>
              </div>
              <button
                onClick={() => {
                  handleDeleteTask(task.id);
                }}
                className="text-sm text-red-500 hover:text-red-600 font-medium shrink-0"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
