export const addTodo = (title,data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      title:title,
      data: data,
    },
  };
};

export const deleteTodo = (id) => { 
  return {
    type: "DELETE_TODO",
    id:id
  };
};

export const editTodo = (id,title,data) => { 
  return {
    type: "EDIT_TODO",
    payload: {
      id: id,
      title:title,
      data: data,
    },
  };
};

export const removeAllTodos = () => {
  return {
    type: "DELETE_ALL",
  };
};
