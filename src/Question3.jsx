import React, {Component} from 'react';

class Question3 extends Component {
  constructor(props){
    super(props);
    this.state={
      question: {},
    }
  }


  componentDidMount() {
    fetch(`/192.168.1.70/question/3`)
      .then(res => res.json())
      .then((question) => {
       this.setState({ question });
      });
  } 

  render() {
    return(
      <div className="Question2">
        <p>Tu te moques tout le temps d’un camarade, qu’est-ce que cela lui fait ?</p>
        <p> {this.state.question.content} </p>
        <h4><img src='/images/triangle.png' alt=''/>Rien</h4>
        <h4><img src='/images/cross.png' alt=''/>Ça le fait rire</h4>
        <h4><img src='/images/circle.png' alt=''/>Ça le rend triste</h4>
        <h4><img src='/images/square.png' alt=''/>Il va t’adorer</h4>

      </div>
    );
  }
}

export default Question3;