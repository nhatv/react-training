import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchInitialTodo = createAsyncThunk(
  "todo/fetchInitialTodo",
  async () => {
    return fetch(API_URL).then((res) => res.json());
  }
);

export const rtkTodoSlice = createSlice({
  name: "todo",
  initialState: {
    inputValue: "",
    todoList: [],
    isEditing: false,
    inputEditValue: "",
    loading: false,
  },
  reducers: {
    submit: (state, action) => {
      state.todoList.push(action.payload);
      state.inputValue = "";
    },
    edit: (state, action) => {
      state.todoList = action.payload.newTodoList;
      state.inputEditValue = action.payload.item.title;
      state.isEditing = true;
    },
    save: (state, action) => {
      state.todoList = action.payload;
      state.isEditing = false;
    },
    del: (state, action) => {
      state.todoList = action.payload;
    },
    cancel: (state, action) => {
      state.todoList = action.payload;
      state.isEditing = false;
    },
    change: (state, action) => {
      state.inputValue = action.payload;
    },
    changeEdit: (state, action) => {
      state.inputEditValue = action.payload;
    },
    toggleCompleted: (state, action) => {
      state.todoList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialTodo.fulfilled, (state, action) => {
      // console.log("fetch", action.payload);
      // fix formatting from initial data
      const formattedTodoList = action.payload.map((item) => {
        return {
          id: item.id,
          title: item.title,
          isEditing: false,
          isCompleted: item.completed,
        };
      });

      state.todoList = formattedTodoList;
    });
    builder.addCase(fetchInitialTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchInitialTodo.rejected, (state) => {
      state.loading = true;
      alert("Loading Initial Data Failed");
    });
  },
});

export const {
  submit,
  edit,
  save,
  del,
  cancel,
  change,
  changeEdit,
  toggleCompleted,
} = rtkTodoSlice.actions;
