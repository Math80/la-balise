import React, {Component} from 'react';

class Question5 extends Component {
  constructor(props){
    super(props);
    this.state={
      question: {},
    }
  }

  componentDidMount() {
    fetch(`/192.168.1.70/question/5`)
      .then(res => res.json())
      .then((question) => {
       this.setState({ question });
      });
  } 


  render() {
    return(
      <div className="Question2">
        <p>La question 5</p>
        <p> {this.state.question.content} </p>

      </div>
    );
  }
}

export default Question5;