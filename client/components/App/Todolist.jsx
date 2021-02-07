import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const Todolist = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <ul>
        {props.todos && props.todos.length ? (
          props.todos.map((data, index) => {
            // return <li key={index}>{data.content}</li>
            return <Todo key={index} data={data} />;
          })
        ) : (
          <li>تسکی نیست</li>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.data,
  };
};

export default connect(mapStateToProps)(Todolist);
