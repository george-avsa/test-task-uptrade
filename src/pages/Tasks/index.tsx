import KanbanItem from "./KanbanItem";

function Tasks() {
    return (
        <div className="tasks">
            <KanbanItem type="queue"></KanbanItem>
            <KanbanItem type="inProgress"></KanbanItem>
            <KanbanItem type="finished"></KanbanItem>
        </div>
    );
}

export default Tasks;