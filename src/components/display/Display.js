import React from "react";

function Display(props) {
  let element = "Loading...";
  let hasUserChosen = props.state.choiceNumber !== null;

  if (hasUserChosen) {
    let currentClueObject = props.state.data[props.state.choiceNumber];
    element = (
      <div>
        Category: {currentClueObject.category.title}
        <br />
        Question: {currentClueObject.question}
        <br />
        Value: {currentClueObject.value}
        <form onSubmit={props.handleSubmit}>
          <div>
            <label htmlFor="userAnswer">Answer</label>
            <input
              type="text"
              name="userAnswer"
              value={props.state.formData.userAnswer}
              onChange={props.handleChange}
            />
          </div>
          <button>Submit Answer</button>
        </form>
      </div>
    );
  }
  if (props.state.data.length > 0 && !hasUserChosen) {
    element = (
      <>
        {props.state.data.map((questionObj, index) => {
          return (
            <button id={index} key={index} onClick={props.handleChoice}>
              {questionObj.category.title}
            </button>
          );
        })}
      </>
    );
  }
  return (
    <div>
      {element}
      Score: {props.state.score}
      <br />
      Previous Answer : {props.state.prevAnswer}
    </div>
  );
}

export default Display;
