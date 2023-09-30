import {ReactComponent as CrossCircle} from './../../assets/crossCircle.svg'

function SubTasksGrid() {
    return (
        <div className="sub-tasks__grid">
            <div className="sub-task sub-task--new">
                <CrossCircle className='sub-task__new'></CrossCircle>
                <span className="sub-task__title">Добавить подзадачу</span>
            </div>
            <div className="sub-task">
                <span className="sub-task__title">Разработка дизайна</span>
                <CrossCircle className='sub-task__delete'></CrossCircle>
            </div>
            <div className="sub-task">
                <span className="sub-task__title">Разработка дизайна</span>
                <CrossCircle className='sub-task__delete'></CrossCircle>
            </div>
        </div>
    );
}

export default SubTasksGrid;