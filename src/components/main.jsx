import { useState } from 'react'
import Error from './Error'

function main() {
    const [todolist, setTodoList] = useState([])
    const [toDo, inputValue] = useState("")
    const [error, setError] = useState(false)

    const updateToDo = (event) => {
        inputValue(event.target.value)
    }


    const handleError = () => {
        setError(true)

        let timer = () => {
            setTimeout(() => {
                setError(false)
            }, 5000)
        }

        timer()
        clearTimeout(timer)
    }

    const addToDo = (e) => {
        e.preventDefault()
        console.log(toDo.length);
        // Daca ToDo-ul este deja in lista, seteaza eroarea ca fiind true, altfel adauga ToDo-ul in lista

        if (todolist.includes(toDo) || toDo.length === 0) {
            handleError()
        } else {
            setTodoList([...todolist, toDo])
        }

        
    }


    return (
        <div>

            <form className="center" onSubmit={addToDo}>
                <input
                    type="text"
                    value={toDo}
                    placeholder="ToDo"
                    onChange={updateToDo}
                />

                <button>Submit ToDo</button>
            </form>
            
            <div className="todos">
                <ul id="todo-container">
                    {/* Listeaza prin toata lista de ToDo-uri, primind si valoare si index si returneaza <li> */}

                    {todolist.map((todo, index) => {
                        return (
                            <li key={index}>{todo}</li>
                        )
                    })}
                </ul>
            </div>

            {/* Apare daca setError(true) */}
            <Error error={error}/>
        </div>
    )
}

export default main