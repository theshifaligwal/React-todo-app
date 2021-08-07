import React, { useState, useContext } from "react";
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { v4 } from "uuid";
import {} from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";

const TodoForm = () => {
  return (
    <Form>
      <FormGroup>
      <InputGroup> <Input
      type="text"
      name="todo"
      id="todo"
      placeholder="Your next todo"
      // Todo: value, onChange
    />
    <InputGroupAddon addonType="prepend">
    <Button color="warning" 
    // Todo: onClick
    >
    Add</Button>
    </InputGroupAddon></InputGroup>
       
      </FormGroup>
    </Form>
  );
};

export default TodoForm;