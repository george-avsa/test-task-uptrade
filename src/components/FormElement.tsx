function FormElement({
    children,
    label
}: {label: string, children?: React.ReactNode}) {
    return (
        <div className="form-element">
            <span className="form-element__label">
                {label}
            </span>
            {children}
        </div>
    );
}

export default FormElement;