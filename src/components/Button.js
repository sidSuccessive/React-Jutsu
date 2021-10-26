import classes from "./Button.module.css";

function Button (props) {
    return (
        <div className={classes.actions}>
            <button disabled={props.isDisable}>{props.text}</button>
        </div>
    );
}

export default Button; 