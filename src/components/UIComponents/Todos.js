import React from 'react';
import List from '@material-ui/core/List';
import Todo from './todo';
import Typography from '@material-ui/core/Typography';
import manageContext from './../context-api/manageContext';


const Todos = () => {
    return ( 
        <>
            <manageContext.Consumer>
            {context =><List>
                {/* {console.log('Todos_context--->>',context)} */}
                {context.todoArr && context.todoArr.length
                        ? context.todoArr.map((todo, index) => {
                            return<Todo key={index} todo={todo} clickEdit={() => context.editTodo(todo)}
                             />;
                            })
                : <Typography variant="h6" gutterBottom>
                    No todo added yet!.......
                    </Typography>}
                </List>
            }
            </manageContext.Consumer>  
        </>
     );
}
 
export default Todos;