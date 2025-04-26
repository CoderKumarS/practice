import React, {useState} from 'react'
import "./style.css";

const Todo = () => {
    const [inputdata, setInputData] = useState();
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="Todo-List" />
                        <figcaption>Add your List Here ✌️</figcaption>
                    </figure>
                    <div className="addItems">
                        <input 
                        type="text"
                        placeholder='Add items'
                            className='form-control' 
                            value={ inputdata}
                            onChange={(event) => setInputData(event.target.value)}
                            />
                        <i className="fa fa-plus add-btn"></i>
                    </div>
                    {/* show our items */}
                    <div className="showItems">
                        <div className="eachItem">
                            <h1>Apple</h1>
                            <div className="todo-btn">
                            <i className="far fa-edit add-btn"></i>
                            <i className="far fa-trash-alt add-btn"></i>
                            </div>
                        </div>
                    </div>
                    {/* remove all items */}
                    <div className="showItems">
                        <buttom className="btn effect04" data-sm-link-text="Remove All">
                            <span>
                                Chech List
                            </span>
                        </buttom>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
