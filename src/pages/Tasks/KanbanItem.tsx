import TaskList from "./TaskList";

const titles = {
    queue: 'Очередь',
    inProgress: 'В разработке',
    finished: 'Выполнено'
}

function KanbanItem({type}: {type: 'queue' | 'inProgress' | 'finished'}) {
    return (
        <div className="kanban__item">
            <h3 className="kanban__title">{titles[type]}</h3>
            <div className={`kanban__color kanban__color--${type}`}></div>
            <TaskList></TaskList>
        </div>
    );
}

export default KanbanItem;