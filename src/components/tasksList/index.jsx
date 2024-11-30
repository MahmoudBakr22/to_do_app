import { useUIContext } from "@/contexts/UIContext";
import EmptyList from "./emptyList";
import TaskItem from "./taskItem";
import { useTasksListContext } from "@/contexts/taskListContext";

export default function TasksList() {
  const { addUiAction } = useUIContext();
  const { tasksList } = useTasksListContext();

  const editTask = (task) => {
    addUiAction("edit_task_modal", task);
  };

  return (
    <div className="bg-gray-100 pt-6 px-5 h-full rounded-t-3xl">
      <div className="lg:max-w-4xl m-auto font-bold">
        {tasksList && (
          <>
            <div className="text-xl	mb-5">My Tasks</div>
            {tasksList[0] ? (
              tasksList.map((task) => (
                <TaskItem key={task.id} taskData={task} editTask={editTask} />
              ))
            ) : (
              <EmptyList />
            )}
          </>
        )}
      </div>
    </div>
  );
}
