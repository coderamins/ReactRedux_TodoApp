import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addTodo,
  deleteTodo,
  editTodo,
  checkTodo,
  removeAllTodos,
} from "../actions/index";
import "./todo.css";
import { FaPlus, FaTrash, FaPenAlt,FaCheck } from "react-icons/fa";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(1);
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  const [formStatus, setFormStatus] = useState(1);
  const [todoId, setTodoId] = useState(1);
  const handleEditButton = (elem) => {
    setFormStatus(2);
    setTodoId(elem.id);
    setInputData(elem.data);
    setTitle(elem.title);
  };

  const InputButton =
    formStatus === 1 ? (
      <button
        className="btn btn-outline-secondary btn-primary"
        type="button"
        onClick={() => dispatch(addTodo(title,inputData,status), setInputData(""))}
        id="button-addon2"
      >
        <FaPlus style={{ color: "white" }} />
      </button>
    ) : (
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() =>
          dispatch(
            editTodo(todoId, title,inputData),
            setInputData(""),
            setFormStatus(1)
          )
        }
        id="button-addon2"
      >
        <FaPenAlt />
      </button>
    );

  return (
    <div className="container p-5">
      <div className="main-div">
        <div className="child-div">
          <div
            className="alert alert-primary d-flex align-items-center"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>Add your todo list ...</div>
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control "
              style={{ marginRight: 5 }}
              placeholder="Title"
              aria-describedby="button-addon2"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />

            <input
              type="text"
              className="form-control"
              placeholder="Add Items..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />

            {InputButton}
          </div>
          <div className="row">
            {list.map((elem) => {
              return (
                <div
                  className={elem.status===2 ? "card checked p-2 d-flex m-1":"card p-2 d-flex m-1"} 
                  style={{ width: "18rem" }}
                  key={elem.id}
                >
                  <div className="card-body">
                    <h3 className="card-title">{elem.title}</h3>
                    <p className="card-text"> {elem.data}</p>
                    <a
                      href="#"
                      alt="Delete todo"
                      className="btn btn-danger"
                      onClick={() =>
                        dispatch(deleteTodo(elem.id), setInputData(elem.id))
                      }
                    >
                      <i
                        className="far fa-trash add-btn"
                        title="Delete Item"
                      ></i>
                      <FaTrash />
                    </a>
                    {
                      elem.status===2 ? "" :
                      (<a
                      href="#"
                      className="btn btn-primary m-1"
                      alt="Edit todo"
                      onClick={() => handleEditButton(elem)}
                    >
                      <i
                        className="far fa-trash add-btn"
                        title="Delete Item"
                      ></i>
                      <FaPenAlt />
                    </a>)
                    }
                    
                    {
                      elem.status===2 ? "" :
                    (<a
                      href="#"
                      className="btn btn-primary m-1 float-end"
                      alt="Check Todo"
                      onClick={() =>
                        dispatch(checkTodo(elem.id,2), setInputData(elem.id))
                      }
                    >
                      <i
                        className="far fa-trash add-btn"
                        title="Check Todo"
                      ></i>
                      <FaCheck />
                    </a>)}

                  </div>
                </div>
              );
            })}

            {list.length > 0 ? (
              <button
                type="button"
                onClick={() => dispatch(removeAllTodos())}
                className="btn btn-danger"
              >
                Remove All
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
