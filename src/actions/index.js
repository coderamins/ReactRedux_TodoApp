export const addTodo = (title,data,status) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      title:title,
      data: data,
      status:status
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

export const checkTodo = (id,status) => { 
  return {
    type: "CHECK_TODO",
    payload: {
      id: id,
      status:status
    },
  };
};
