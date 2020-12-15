import './App.css';
import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import TodoList from "./components/UIComponents/todoList";
import NavBar from "./components/UIComponents/navBar";
import NotFound from './components/UIComponents/notFound';
import TestForm from './components/UIComponents/testForm';
import Charts from "./components/UIComponents/Charts";
import Tables from "./components/UIComponents/Tables";
import MultilevelDropdown from "./components/UIComponents/MutlilevelDropDown";
import DropDown from "./components/UIComponents/DropDown";
import UploadFile from "./components/UIComponents/uploadFile";
import UserInfo from "./components/UIComponents/userInfo";



function App() {

  return (
    <React.Fragment>
      <NavBar />
      <ToastContainer />

      <Switch>
        <Route path="/testform" component={TestForm} />
        <Route path="/selectDropdown" component={DropDown} />
        <Route path="/userInfo" component={UserInfo} />
        <Route path="/uploadFile" component={UploadFile} />
        <Route path="/dynamicNav" component={MultilevelDropdown} />
        <Route path="/chart" component={Charts} />
        <Route path="/tables" component={Tables} />
        <Route path="/home" component={TodoList} />

        <Redirect from="/" exact to="/home" />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
