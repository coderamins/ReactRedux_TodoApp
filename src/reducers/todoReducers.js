const initialData = {
  list: [],
};

//const [list,setList]=useState([]);

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, title, data, status } = action.payload;
      if(!action.title)
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            title: title,
            data: data,
            status: status,
          },
        ],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "EDIT_TODO":
      let index = state.list.findIndex(
        (todo) => todo.id === action.payload.id
      ); //finding index of the item
      let newArray = [...state.list];
      newArray[index].title = action.payload.title; //changing value in the new array
      newArray[index].data = action.payload.data; //changing value in the new array
      var res = {
        ...state.list, //copying the orignal state
        list: newArray, //reassingning todos to new array
      };

    case "CHECK_TODO":
      console.log(action.payload.id);
      const ch_index = state.list.findIndex(
        (todo) => todo.id === action.payload.id
      ); 
      const ch_newArray = [...state.list];
      ch_newArray[ch_index].status = action.payload.status;
      var res = {
        ...state.list,
        list: ch_newArray,
      };

      return res;

    case "DELETE_ALL":
      return {
        list: [],
      };

    default:
      return state;
  }
};

export default todoReducers;
