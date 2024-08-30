import {useEffect, useState} from "react";

function App(){
    const [toDo, setToDO] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDO(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === ""){
            return;
        }
        setToDO("");
        setToDos((currentArray) => [toDo, ...currentArray]);
    };
    useEffect(() => {
        if(toDos.length !== 0){
            console.log(toDos);
        }
    }, [toDos]);
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange}
                       value={toDo}
                       type="text"
                       placeholder="write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;