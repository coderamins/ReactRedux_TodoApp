const initialData = {
  list: [],
};

//const [list,setList]=useState([]);

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id,title, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            title:title,
            data: data,
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
      const index = state.list.findIndex((todo) => todo.id === action.payload.id); //finding index of the item
      const newArray = [...state.list]; //making a new array
      console.log(action.payload.title);
      newArray[index].title = action.payload.title; //changing value in the new array
      newArray[index].data = action.payload.data; //changing value in the new array
      var res= {
        ...state.list, //copying the orignal state
        list: newArray, //reassingning todos to new array
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
