import "./InputSelect.css";


const InputSelect = ({ children, ...rest }) => {
    return (
        <div className="selectElement">
            <select {...rest}>
                {children}
            </select>
        </div>
    )
}
export default InputSelect;