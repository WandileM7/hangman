const HEAD=(
    <div
    style={{
        height:"50px",
        width:"50px",
        borderRadius:"100%",
        border:"10px solid black",
        position:"absolute",
        top:"50px",
        right:"-30px",
    }}
    />
)
const BODY=(
    <div
    style={{
        height:"100px",
        width:"10px",
        background:"black",
        position:"absolute",
        top:"120px",
        right:0,
        
    }}
    />
)
const RIGHT_ARM=(
    <div
    style={{
        height:"100px",
        width:"10px",
        background:"black",
        position:"absolute",
        top:"70px",
        right:"0px",
        rotate:"45deg",
        transformOrigin:"left bottom"
    }}
    />
)
const LEFT_ARM=(
    <div
    style={{
        height:"100px",
        width:"10px",
        background:"black",
        position:"absolute",
        top:"70px",
        right:"0px",
        rotate:"-45deg",
        transformOrigin:"right bottom"
    }}
    />
)
const RIGHT_LEG=(
    <div
    style={{
        height:"100px",
        width:"10px",
        background:"black",
        position:"absolute",
        top:"110px",
        right:"-10px",
        rotate:"135deg",
        transformOrigin:"left bottom"
    }}
    />
)
const LEFT_LEG=(
    <div
    style={{
        height:"100px",
        width:"10px",
        background:"black",
        position:"absolute",
        top:"110px",
        right:"10px",
        rotate:"-135deg",
        transformOrigin:"right bottom"
    }}
    />
)
type HangmanDrawingProps={
    numberOfGuesses:number
}
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps){
    return<div style = {{position:"relative"}}>
    {BODY_PARTS.slice(0,numberOfGuesses)}
        <div
        style={{
            height:"50px",
            width:"10px",
            background:"black",
            position:"absolute",
            top:0,
            right:0,
        }}
        />
        <div
        style={{
            height:"10px",
            width:"200px",
            background:"black",
            marginLeft:"120px"
        }}
        />
        <div
        style={{
            height:"400px",
            width:"10px",
            background:"black",
            marginLeft:"120px"
        }}
        />
        <div style={{height:"10px",width:"250 px", background:"black"}}/>
    </div>
}