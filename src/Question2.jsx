import React, {Component} from 'react';

class Question1 extends Component {
  constructor(props){
    super(props);
    this.state={
      question: {},
    }
  }

  componentDidMount() {
    fetch(`/192.168.1.70/question/2`)
      .then(res => res.json())
      .then((question) => {
       this.setState({ question });
      });
  } 

  render() {
    return(
      <div className="Question2">
        <p>Tu es victime de harcèlement, que fais-tu ?</p>
        <p> {this.state.question.content} </p>
        <h4> {this.state.question.content} </h4>
        <h4><img src='/images/triangle.png' alt=''/>Je me venge</h4>
        <h4><img src='/images/cross.png' alt=''/>J'en parle avec mes parents</h4>
        <h4><img src='/images/circle.png' alt=''/>Je le garde pour moi</h4>
        <h4><img src='/images/square.png' alt=''/>Je réponds méchamment aux commentaires</h4>
      </div>
    );
  }
}

export default Question1;