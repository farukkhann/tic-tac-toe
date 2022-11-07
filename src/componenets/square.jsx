import "./square.css"

export const SquareComponent=(props)=>{
    console.log(props)
    const classes=props.className?`${props.className} square`:'square'
    console.log(classes)
    return <>
    <span className={classes}>0</span>
    </>
}