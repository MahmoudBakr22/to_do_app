"use client";
import Modal from "@/components/HOC/modal";
import TaskForm from "@/components/taskForm";
import DialogeBox from "@/components/UI/dialogeBox";
import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export function UIContextProvider({ children }) {
  const [uiActions, setUiActions] = useState([]);

  const addUiAction = (type, data) => {
    const newActions = [...uiActions, { type, data }];
    setUiActions(newActions);
  };

  const removeUiAction = (actionType) => {
    const newActions = uiActions.filter(({ type }) => type !== actionType);
    setUiActions(newActions);
  };
  const clearUiActions = () => {
    setUiActions([]);
  };

  const formActionsArr = () => {
    return uiActions.map(({ type, data }) => {
      switch (type) {
        case "add_task_modal":
          return (
            <Modal key={type} close={removeUiAction.bind(null, "add_task_modal")}>
              <TaskForm />
            </Modal>
          );
        case "edit_task_modal":
          return (
            <Modal key={type} close={removeUiAction.bind(null, "edit_task_modal")}>
              <TaskForm selectedTask={data} />
            </Modal>
          );
        case "dialog_box":
          return (
            <Modal key={type} close={removeUiAction.bind(null, "edit_task_modal")}>
              <DialogeBox {...data} />
            </Modal>
          );
      }
    });
  };

  const actionsArr = formActionsArr();
  return (
    <UIContext.Provider
      value={{
        addUiAction,
        removeUiAction,
        clearUiActions,
      }}
    >
      {actionsArr}
      {children}
    </UIContext.Provider>
  );
}
export function useUIContext() {
  const context = useContext(UIContext);

  if (!context) throw new Error("UIUseContext must be used inside a UIContextProvider");

  return context;
}
