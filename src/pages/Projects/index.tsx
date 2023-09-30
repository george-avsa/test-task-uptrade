import TaskMessage from '../../components/TaskMessage';
import {ReactComponent as DropdownArrow} from './../../assets/dropdownArrow.svg'
import {ReactComponent as WarningIcon} from './../../assets/warning.svg'
import Details from './Details';

let status: 'active' | 'finished' | 'inProgress' = 'active';
let deadlineStatus: 'expired' | 'warning' | 'active' | 'finished' = 'expired';

function Project() {
    return (
        <div className="projects">
            <div className="project__title-row">
                <h3 className="project__title">Название проекта</h3>
                <h3 className="project__status">Статус</h3>
                <h3 className="project__date">Дедлайн</h3>
            </div>
            <div className={`project__item ${(status === 'finished') ? 'project__item--finished' : ''}`}>
                <div className={`deadline-status deadline-status--${deadlineStatus}`}></div>
                <div className='project__main-info'>
                    <span className="project__title">Разработка дизайна</span>
                    <span className="project__status">В процессе</span>
                    <span className="project__date">26.09.2023</span>
                    <DropdownArrow />
                </div>
                <TaskMessage error className='warning-message__project'></TaskMessage>
                <Details></Details>
            </div>
        </div>
        
    );
}

export default Project;