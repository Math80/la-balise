import React, {Component} from 'react';

class Question4 extends Component {
  constructor(props){
    super(props);
    this.state={
      question: {},
    }
  }

  componentDidMount() {
    fetch(`/192.168.1.70/question/4`)
      .then(res => res.json())
      .then((question) => {
       this.setState({ question });
      });
  } 

  render() {
    return(
      <div className="Question2">
        <p>Tu vois un groupe se moquer d’un camarade, que fais-tu ?</p>
        <p> {this.state.question.content} </p>
        <h4><img src='/images/triangle.png' alt=''/>J’en parle au maître / à la maîtresse</h4>
        <h4><img src='/images/cross.png' alt=''/>Je regarde</h4>
        <h4><img src='/images/circle.png' alt=''/>Je ne fais / dis rien</h4>
        <h4><img src='/images/square.png' alt=''/>Je me moque aussi de lui</h4>

      </div>
    );
  }
}

export default Question4;