interface TaskProps {
  task: string;
}

export default function TaskItem({ task = "" }: TaskProps) {
  return (
    <div>
      <input type="checkbox" />
      <span> {task} </span>
      <button>Delete</button>
    </div>
  );
}
