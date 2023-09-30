function InputElement({
    children,
    label
}: {label: string, children?: React.ReactNode}) {
    return (
        <div className="input-element">
            <label className="input-element__label" htmlFor="ew">
                {label}
            </label>
            {children}
        </div>
    );
}

export default InputElement;