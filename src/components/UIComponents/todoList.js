import React, { useState} from 'react';
import { connect } from "react-redux";
import { add_Todo,Update_Todo } from '../redux-store/actions/todoActions';
// import Todo from './todo';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Content from './content';
import manageContext from './../context-api/manageContext';
// react-toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useStyles = makeStyles((theme) => ({
    root:{
      marginTop:'40px'
  },
  content: {
  marginTop: '20px',
   textAlign:'center'
  }
}));



const TodoList = (props) => {

  const { items } = props;
  const classes = useStyles();
  // for todo from use
  const [inputField , setInputField] = useState('')
  const [isEdit , setisEdit] = useState(false)
  const [selectedTodo , setselectedTodo] = useState()


  const handleChange = (e) => {
    // console.log('handleChange---->>')
    setInputField( e.target.value)
    
  }

  const handleSubmit = (e) => {
    // console.log('handleSubmit---->>')
    e.preventDefault();
    let validText = inputField.trim();
    if(validText){
      // console.log('handleSubmit_inputField---->>', inputField)
      if (!isEdit) {
        // console.log('if_isEdit---->>', isEdit)
        props.addTodo(inputField);
      } else {
        // console.log('else_isEdit---->>', isEdit)
        props.updateTodo(inputField, selectedTodo);
        setisEdit(false);
      }
      setInputField('');
    }
    else{
      toast.error('Please enter some text', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    

  }

  
  const todoEditHandler = (todo) => {
    // console.log('todoEditHandler---->>', todo);
    setInputField(todo.title);
    setisEdit(true) 
    setselectedTodo(todo)
    };

  return ( 

    <Grid container spacing={3} className={classes.root}>
        <Grid item  xs={3}/>
        <Grid item xs={6}>
          
        <div className={classes.content}>
          <div>
            <Typography variant="h3" gutterBottom> Todo List</Typography>
              <Input placeholder="Add task here"
                onChange={handleChange}
                value={inputField || ''}
              />
              <Button variant="contained" size="small" color="primary" onClick={handleSubmit} >
                { !isEdit ? 'Add Todo': "Update" }
            </Button>
          </div>
          <manageContext.Provider 
                  value={{
                        todoArr: items.Todos,
                        editTodo: todoEditHandler
                        }}>
              <Content/>
          </manageContext.Provider>
          
          </div>

          
        
        </Grid>
        <Grid item  xs={3}/>
    </Grid>
 );
}

const mapStateToProps = state => ({
  items: state.AllTodos
});
const mapDispatchToProps = dispatch => ({

    addTodo: (todo) => dispatch(add_Todo(todo)),
    updateTodo: (text,oldTodo) => dispatch(Update_Todo(text,oldTodo)),
    
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);