import CommentForm from "./CommentForm";

function CommentTree() {
    return (
        <div className="comment-tree">
            <div className="comment-item">
                <div className="comment-item__header">
                    <div className="comment-item__info">
                        <span className="comment-item__user-name">Гоги</span>
                        <span className="comment-item__date">27.09.2023 в 20:22</span>
                    </div>
                    <span className="comment-item__reply">
                        Ответить
                    </span>
                </div>
                <p className="comment-item__content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien leo, ullamcorper id nunc ac, tempor suscipit magna. Maecenas felis sem, auctor vel ipsum nec, consequat fringilla dui. Pellentesque malesuada congue felis a consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <div className="comment-tree">
                    
                </div>
            </div>
            <CommentForm></CommentForm>
        </div>
    );
}

export default CommentTree;