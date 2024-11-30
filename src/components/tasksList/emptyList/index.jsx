import EmptyIcon from "@/assets/icons/emptyIcon";

export default function EmptyList() {
  return (
    <div className="text-center mt-10">
      <EmptyIcon className={"size-32 m-auto ext-indigo-400"} />
      <div className="text-sm my-3">No tasks</div>
      <div className="text-sm text-black/60">Get started by creating a new task.</div>
    </div>
  );
}
