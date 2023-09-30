import Input from "../../../components/UI/Input";
import Textarea from "../../../components/UI/Textarea";

function CommentForm() {
    return (
        <form className="comment-form">
            Ответить пользователю Гоги
            <Input placeholder="Имя" className="comment-form__input"/>
            <Textarea placeholder="Комментарий" className="comment-form__input"/>
            <button className="comment-form__button">Ответить</button>
        </form>
    );
}

export default CommentForm;