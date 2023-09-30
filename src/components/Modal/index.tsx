import { Fragment } from "react";
import Input from "../UI/Input";
import InputElement from "../InputElement";
import Select from "../UI/Select";
import Textarea from "../UI/Textarea";
import FormElement from "../FormElement";
import CommentTree from "../../pages/Tasks/comments/CommentTree";
import CommentForm from "../../pages/Tasks/comments/CommentForm";
import CommentUploadedFiles from "../../pages/Tasks/comments/CommentUploadedFiles";
import SubTasksGrid from "../../pages/Tasks/SubTasksGrid";
import ModalHeader from "./ModalHeader";

function Modal() {
    return (
        <div className="modal-wrapper">
            <div className="modal">
                <ModalHeader />
                <InputElement label="Выберите задачу">
                    <Select placeholder='Разработка дизайна' disabled />
                </InputElement>
                <InputElement label="Название задачи">
                    <Input placeholder='Разработка дизайна' disabled />
                </InputElement>
                <InputElement label="Описание">
                    <Textarea placeholder='Разработка дизайна' disabled />
                </InputElement>
                <InputElement label="Статус">
                    <Select placeholder='Разработка дизайна' disabled />
                </InputElement>
                <FormElement label="Комментарии">
                    <CommentTree></CommentTree>
                </FormElement>
                <FormElement label="Прикрепленные файлы">
                    <CommentUploadedFiles></CommentUploadedFiles>
                </FormElement>
                <FormElement label="Подзадачи">
                    <SubTasksGrid></SubTasksGrid>
                </FormElement>
            </div>
        </div>
    );
}

export default Modal;