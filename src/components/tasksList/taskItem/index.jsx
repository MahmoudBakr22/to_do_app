export default function TaskItem({ taskData, editTask }) {
  const formatedDate = new Date(+taskData.last_edit).toLocaleString();

  return (
    <div
      onClick={() => {
        editTask(taskData);
      }}
      className="group mb-6  flex justify-between items-center p-3 border-indigo-400 border-2 rounded-md hover:bg-white"
    >
      <div>
        <div className="text-lg/6 font-semibold text-gray-900 mb-2">{taskData.title}</div>
        <p className="text-sm/6 text-gray-600">{taskData.description}</p>
        <div className="flex items-center gap-x-4 text-xs text-gray-400 mt-2">{formatedDate}</div>
      </div>
    </div>
  );
}
