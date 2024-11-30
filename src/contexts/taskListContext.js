"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

const TasksListContext = createContext();

export function TasksListContextProvider({ children }) {
  const [tasksList, setTasksList] = useState(null);

  const searchTask = (query) => {
    const lowerQ = query.toLowerCase();
    const list = savedTasks.filter(({ title, description = "" }) => {
      const lowerT = title.toLowerCase();
      const lowerD = description.toLowerCase();

      return lowerT.includes(lowerQ) || lowerD.includes(lowerQ);
    });

    setTasksList(list);
  };

  const addTask = (newTask) => {
    const timeStamp = +new Date();
    const newList = [
      ...tasksList,
      {
        ...newTask,
        id: timeStamp,
        last_edit: timeStamp,
      },
    ];
    setTasksList(newList);
  };
  const editTask = (taskId, task) => {
    const newList = tasksList.filter(({ id }) => +id !== +taskId);
    let oldTask = tasksList.find(({ id }) => id === taskId);

    if (oldTask) {
      const timeStamp = +new Date();

      setTasksList([
        ...newList,
        {
          ...oldTask,
          title: task.title,
          description: task.description,
          last_edit: timeStamp,
        },
      ]);
    }
  };
  const removeTask = (taskId) => {
    const newList = tasksList.filter(({ id }) => +id !== +taskId);
    setTasksList(newList);
  };

  const updateLocalStorage = useCallback(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  }, [tasksList]);

  function getTaskFromLocalStorage() {
    const result = localStorage.getItem("tasks");
    if (result) {
      return JSON.parse(result);
    } else {
      return [];
    }
  }

  useLayoutEffect(() => {
    setTasksList(getTaskFromLocalStorage());
  }, []);

  useEffect(() => {
    updateLocalStorage();
  }, [tasksList, updateLocalStorage]);

  return (
    <TasksListContext.Provider
      value={{
        tasksList,
        addTask,
        editTask,
        removeTask,
        searchTask,
      }}
    >
      {children}
    </TasksListContext.Provider>
  );
}
export function useTasksListContext() {
  const context = useContext(TasksListContext);

  if (!context)
    throw new Error("useTasksListContext must be used inside a TasksListContextProvider");

  return context;
}
