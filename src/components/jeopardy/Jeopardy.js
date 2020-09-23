import React, { Component } from "react";
//import our service
import JeopardyService from "../jeopardyService/JeopardyService";
import Display from "../display/Display";
class Jeopardy extends React.Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: [],
      score: 0,
      formData: {
        userAnswer: "",
      },
      choiceNumber: null,
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      console.log(result.data);
      this.setState({
        data: result.data,
      });
    });
  }
  //when the component mounts, get the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  handleChange = (event) => {
    const newformData = { ...this.state.formDate };
    newformData[event.target.name] = event.target.value;

    this.setState({ formData: newformData });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let userAnswer = this.state.formData.userAnswer;
    let realAnswer = this.state.data[this.state.choiceNumber].answer;
    let isCorrectAnswer = userAnswer === realAnswer;

    if (isCorrectAnswer) {
      console.log("correct answer");
      this.setState((prevState) => {
        return {
          score: prevState.score + prevState.data[prevState.choiceNumber].value,
          choiceNumber: null,
          formData: {
            userAnswer: "",
          },
          prevAnswer: prevState.data[prevState.choiceNumber].answer,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          score: prevState.score - prevState.data[prevState.choiceNumber].value,
          choiceNumber: null,
          formData: {
            userAnswer: "",
          },
          prevAnswer: prevState.data[prevState.choiceNumber].answer,
        };
      });
      console.log("incorrect answer");
    }

    this.getNewQuestion();
    this.setState({
      submitted: true,
    });
  };

  handleChoice = (event) =>
    this.setState({
      choiceNumber: event.target.id,
    });

  //display the results on the screen
  render() {
    return (
      <div className="Jeopardy">
        <Display
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleChoice={this.handleChoice}
        />
      </div>
    );
  }
}
export default Jeopardy;
