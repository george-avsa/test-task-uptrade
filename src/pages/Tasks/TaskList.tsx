import TaskItem from "./TaskItem";

function TaskList() {
    return (
        <div className="kanban__tasks-list">
            <TaskItem></TaskItem>
        </div>
    );
}

export default TaskList;