const progressValues = {
    'queue': 'В очереди',
    'inProgress': 'В разработке',
    'finished': 'Завершен',
}

function SelectItem({value}: {value: 'queue' | 'inProgress' | 'finished'}) {
    return (
        <div className="select-item">
            <div className={`select-element__cirlce select-element__cirlce--${value}`}/>
            <span className="select-element__value">{progressValues[value]}</span>
        </div>
    );
}

export default SelectItem;