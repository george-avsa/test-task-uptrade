import {ReactComponent as FileIcon} from "./../../assets/file.svg"
import {ReactComponent as NewFileIcon} from "./../../assets/newFile.svg"

function UploadedFile({isNew=false}: {isNew?:boolean}) {
    return (
        <div className="uploaded-file">
            {isNew ? <NewFileIcon/> : <FileIcon />}
            <span className="uploaded-file__text">{isNew ? "Загрузить" : "File.pdf"}</span>
        </div>
    );
}

export default UploadedFile;