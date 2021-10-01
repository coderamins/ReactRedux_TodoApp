import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import TextField from "@mui/material/TextField";
import "./todo.css";
import { FaPlus,FaTrash } from "react-icons/fa";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <div className="container p-5">
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here .</figcaption>
          </figure>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Add Items..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            >
              <FaPlus />
            </button>
          </div>
          <div className="row">
            {list.map((elem) => {
              return (
                <div
                  class="card p-2 d-flex m-1"
                  style={{ width: "18rem" }}
                  key={elem.id}
                >
                  <div class="card-body">
                    <h3 className="card-title">Title</h3>
                    <p className="card-text"> {elem.data}</p>
                    <a
                      href="#"
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
