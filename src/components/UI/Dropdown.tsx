import SelectItem from "./SelectItem";

function Dropdown() {
    return (
        <div className="dropdown">
            <SelectItem value="queue" />
            <SelectItem value="inProgress" />
        </div>
    );
}

export default Dropdown;