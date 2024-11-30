"use client";

import PlusIcon from "@/assets/icons/plusIcon";
import Header from "@/components/layout/header";
import TasksList from "@/components/tasksList";
import { useUIContext } from "@/contexts/UIContext";

export default function Home() {
  const { addUiAction } = useUIContext();
  const showAddTaskModal = () => {
    addUiAction("add_task_modal");
  };
  return (
    <div className="h-svh bg-indigo-400">
      <Header />
      <TasksList />
      <div className={"flex items-center fixed h-20 bottom-0  w-full text-center bg-white"}>
        <PlusIcon className={"m-auto cursor-pointer"} onClick={showAddTaskModal} />
      </div>
    </div>
  );
}
