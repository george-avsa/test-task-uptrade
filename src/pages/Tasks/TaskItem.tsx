import TaskMessage from '../../components/TaskMessage';
import SubTaskInfo from './SubTaskInfo';
import {ReactComponent as InfoIcon} from './../../assets/info.svg';

function TaskItem() {
    return (
        <div className="task__item">
                <span className='task__name'>Разработка дизайна</span>
                <InfoIcon />
            {/* <TaskMessage error className='warning-message__task'></TaskMessage> */}
            {/* <SubTaskInfo></SubTaskInfo> */}
        </div>
    );
}

export default TaskItem;