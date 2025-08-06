function handleClick() {
    console.log("Hello!");
    
}

function handleMouseOver() {
    console.log("Bye!");
    
}

function handleDoubleClick() {
    console.log("hii team!");
    
}

export default function Button() {
    return (
        <div>
            <button onClick = {handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem iste nostrum iusto? Dolores labore delectus totam, provident fuga voluptates consequatur incidunt esse aperiam vero! Dicta deleniti at harum itaque ipsam.
            </p>
            <button onDoubleClick={handleDoubleClick}>doubl click me!</button>
        </div>
    );
}