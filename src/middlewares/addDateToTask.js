const addDateToTask = (store) => (next) => (action) => {
  if (action.type === "SUBMIT") {
    // const newTodoItem = {
    //   id: uuidv4(),
    //   title: `Added at ${Date()}: ${state.inputValue}`,
    //   isEditing: false,
    //   isCompleted: false,
    // };
    action.payload = {
      ...action.payload,
      title: `Added at ${new Date().toLocaleDateString()}: ${
        action.payload.title
      }`,
    };
  }

  let result = next(action);
  return result;
};

export default addDateToTask;
