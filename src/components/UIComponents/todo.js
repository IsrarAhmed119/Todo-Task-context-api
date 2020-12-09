import React, { useState} from 'react';
import {Delete_Todo,Ready_Todo} from '../redux-store/actions/todoActions'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


const useStyles = makeStyles((theme) => ({
    root:{
      marginTop:'20px'
  },
    button: {
    margin: theme.spacing(1),
    }
}));

const Todo = ( props) => {

  // for modal use
  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);


    const classes = useStyles();
    // console.log('Todo---->>',todo)


  const handleDelete = () => {
    // console.log('handleDelete---->>')
    props.deleteTodo(props.todo.id)
    handleCloseModal()
    
  }


    return ( 
        <>
          <Container>
            <Row>
              <Col><li className={classes.root}>
               <Badge pill variant="secondary" style={{marginRight:'10px'}}>
                    {props.todo.id}    
                </Badge>
               <Typography variant="h6" display='inline' gutterBottom>
                 {props.todo.title}
            </Typography>

               <Button
                disabled={props.todo.completed}
                variant="contained" color="primary"
                onClick={() => props.readyTodo(props.todo.id)}
                className={classes.button}
            >
                Mark Ready
            </Button>
            
               <Button
                disabled={props.todo.completed}
                variant="contained" color="primary"
                onClick={props.clickEdit}
                className={classes.button}
            >
                Edit Todo
            </Button>
    
               <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                // onClick={() => props.deleteTodo(props.todo.id)}
                onClick={handleShowModal}
                className={classes.button}
            >
                Delete
                </Button>
            </li></Col>
            </Row>
            
          </Container>
          <Modal show={show}  backdrop="static" onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Typography variant="h6" gutterBottom>
                        Warning Delete todo
                    </Typography>
                </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                     <Typography variant="subtitle2" gutterBottom>
                        Are you sure want to delete thid todo!
                    </Typography>
                    
                </Modal.Body>
            <Modal.Footer>
              <Button variant="contained" color="primary" className={classes.button} onClick={handleCloseModal}>
                Close
              </Button>
                <Button variant="contained" color="secondary"
                        className={classes.button}
                        // onClick={handleCloseModal}
                        onClick={handleDelete}
                        >
                         Delete Todo
                </Button>
              
            </Modal.Footer>
          </Modal>
     
        </>
        );
}

const mapDispatchToProps = dispatch => ({

    deleteTodo: (todo) => dispatch(Delete_Todo(todo)),
    readyTodo: (todo) => dispatch(Ready_Todo(todo)),
    
});

export default connect(null, mapDispatchToProps )(Todo);