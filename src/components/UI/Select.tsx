import SelectItem from "./SelectItem";
import {ReactComponent as ListIcon} from './../../assets/list.svg';
import Dropdown from "./Dropdown";

function Select({
    placeholder,
    disabled=false,
}: {placeholder: string, disabled?: boolean}) {
    return (
        <div className="select-element">
            <SelectItem value="finished" />
            <ListIcon className="select-element__icon" />
            {/* <Dropdown></Dropdown> */}
        </div>
    );
}

export default Select;