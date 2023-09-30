import Icon from "./UI/Icon";
import {ReactComponent as SearchIcon} from './../assets/search.svg'
import {ReactComponent as FilterIcon} from './../assets/filter.svg'
import {ReactComponent as PlusIcon} from './../assets/plus.svg'

function Header() {
    return (
        <header>
            <span className="header__title">Задачи проекта №34</span>
            {/* <span className="header__title">Проекты</span> */}
            {/* <Icon circle><SearchIcon /></Icon> */}
            {/* <Icon circle><FilterIcon /></Icon> */}
            <Icon circle><PlusIcon /></Icon>
        </header>
    );
}

export default Header;