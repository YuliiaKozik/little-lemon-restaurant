import "./Button.css";

const Button = ({ children }) => {
    return (
        <>
            <button className="primaryButton">{children}</button>
        </>
    )
}
export default Button;