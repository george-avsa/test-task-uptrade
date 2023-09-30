function Input({
    placeholder,
    disabled=false,
    className=''
}: {placeholder: string, disabled?: boolean, className?:string}) {
    return (
        <input className={className} type="text" name="ew" disabled={disabled} placeholder={placeholder} />
    );
}

export default Input;