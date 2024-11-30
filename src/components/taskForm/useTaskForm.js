import { useTasksListContext } from "@/contexts/taskListContext";
import { useUIContext } from "@/contexts/UIContext";
import { useState } from "react";

export default function useTaskForm(selectedTask = {}) {
  const { clearUiActions, addUiAction, removeUiAction } = useUIContext();
  const { addTask, editTask, removeTask } = useTasksListContext();

  const [title, setTitle] = useState(selectedTask.title || "");
  const [description, setDescription] = useState(selectedTask.description || "");

  const [isDirty, setIsDirty] = useState(false);

  const taskId = selectedTask.id;
  const isEdit = !!taskId;

  const updateTitle = (e) => {
    setIsDirty(true);
    const value = e.target.value || "";
    setTitle(value);
  };
  const updateDescription = (e) => {
    setIsDirty(true);
    const value = e.target.value || "";
    setDescription(value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!isDirty) {
      return;
    }
    if (isEdit) {
      editTask(taskId, {
        title,
        description,
      });
    } else {
      addTask({
        title,
        description,
      });
    }
    clearUiActions();
  };

  const showDeleteTaskDialog = () => {
    addUiAction("dialog_box", {
      title1: "Delete Task",
      title2:
        " Are you sure you want delete this task? this task will be permanently removed. This action cannot be undone.",
      onConfirm: () => {
        removeTask(taskId);
        clearUiActions();
      },
      onCancel: () => {
        removeUiAction("dialog_box");
      },
    });
  };

  return {
    title,
    updateTitle,
    description,
    updateDescription,
    submit,
    isEdit: !!selectedTask.id,
    showDeleteTaskDialog,
    isDirty,
  };
}
