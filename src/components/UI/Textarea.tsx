function Textarea({
    placeholder,
    disabled=false,
    className=''
}: {placeholder: string, disabled?: boolean, className?: string}) {
    return (
        <textarea className={className} name="ew" disabled={disabled} placeholder={placeholder} />
    );
}

export default Textarea;