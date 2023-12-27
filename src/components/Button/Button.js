import "./Button.css";

const Button = ({ children, ...rest }) => {
    return (
        <>
            <button className="primaryButton" {...rest}>{children}</button>
        </>
    )
}
export default Button;