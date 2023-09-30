import {ReactComponent as WarningIcon} from './../assets/warning.svg'

function TaskMessage({error=false, className=''}) {
    return (
        <div className={`warning-message ${error ? 'warning-message--error' : ''} ${className}`}>
            <WarningIcon />
            <span className="warning-text">
                3 задачи просрочены
            </span>
        </div>
    );
}

export default TaskMessage;