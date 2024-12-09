import './Button.css';

export default function Button({children, isSmall, click}){
    var classes = 'action-btn';
    if(isSmall) 
        classes += ' small'
    return(
        <button className={classes} onClick={click}>{children}</button>
    )
}
