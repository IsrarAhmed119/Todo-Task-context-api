import React from 'react';

const manageContext = React.createContext({
  todoArr: [],
  editTodo: () => {}
});

export default manageContext;
