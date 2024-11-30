import SearchIcon from "@/assets/icons/searchIcon";
import { useTasksListContext } from "@/contexts/taskListContext";

export default function SearchBar() {
  const { searchTask } = useTasksListContext();

  const search = (e) => {
    let q = e.target.value;
    searchTask(q);
  };
  return (
    <div className="flex items-center relative w-full md:w-3/5 m-auto">
      <SearchIcon className={"absolute left-5 stroke-white "} />
      <input
        onChange={search}
        placeholder="Find your task"
        className="w-full bg-transparent pl-14 py-4 z-10  border rounded-lg border-white/30 text-xs text-white/80 focus:outline-none placeholder:text-white/70"
      />
    </div>
  );
}
