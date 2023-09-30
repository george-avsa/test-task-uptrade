import {ReactComponent as MoreArrow} from './../../assets/dropdownArrow.svg'

function Details() {
    return (
        <div className="project__details">
            <div className="project__info">
                <div className="project__description">
                    <h3 className="project__description--title">Описание</h3>
                    <p className="project__description--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien leo, ullamcorper id nunc ac, tempor suscipit magna. Maecenas felis sem, auctor vel ipsum nec, consequat fringilla dui. Pellentesque malesuada congue felis a consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
                <div className="project__uploaded-files">
                    <h3 className="project__uploaded-files--title">Прикрепленные файлы</h3>
                    <p className="project__uploaded-files--text">Дизайн.fig, Тех_задание.docx</p>
                </div>
            </div>
            <div className="project__tasks">
                <div className="project__tasks--header">
                    <h3 className="project__tasks--title">Активные задачи</h3>
                    <div className="project__more-tasks">
                        <div className="project__more-tasks--text">Еще задачи</div>
                        <MoreArrow></MoreArrow>
                    </div>
                </div>
                <div className="project__task-list">
                    <div className="project__task-item">
                        <div className='deadline-status'></div>
                        <span className="project__task-item--text">
                            Добавить прикол
                        </span>
                    </div>
                    <div className="project__task-item">
                        <div className='deadline-status'></div>
                        <span className="project__task-item--text">
                            Добавить прикол
                        </span>
                    </div>
                    <div className="project__task-item">
                        <div className='deadline-status'></div>
                        <span className="project__task-item--text">
                            Добавить прикол
                        </span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;