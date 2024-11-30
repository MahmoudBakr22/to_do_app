import useTaskForm from "./useTaskForm";

export default function TaskForm({ selectedTask = {} }) {
  const {
    title,
    updateTitle,
    description,
    updateDescription,
    submit,
    isEdit,
    showDeleteTaskDialog,
  } = useTaskForm(selectedTask);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 text-center text-2xl/9 font-semibold  text-indigo-500">
        {isEdit ? "Edit Task" : "Add New Task"}
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6" onSubmit={submit}>
          <div>
            <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
              Title
            </label>
            <div className="mt-2">
              <input
                value={title}
                onChange={updateTitle}
                id="title"
                name="title"
                type="text"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
                Description
              </label>
            </div>
            <div className="mt-2">
              <textarea
                value={description}
                onChange={updateDescription}
                id="description"
                name="description"
                type="text"
                className="block h-32 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 resize-none"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isEdit ? "Edit" : "Create"}
            </button>
            {isEdit && (
              <button
                type="button"
                onClick={showDeleteTaskDialog}
                className="mt-4 flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
