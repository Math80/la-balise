import React, {Component} from 'react';

class Question1 extends Component {
  constructor(props){
    super(props);
    this.state={
      question: {},
    }
  }
  componentDidMount (){
    fetch(`/192.168.1.70/api/question/1`)
      .then(res => res.json())
      .then((data) => {
   this.setState({
     question: data
   })
   });
  };
  

  render() {
    return(
      <div className="Question1">
        <h1>Comment s'appelle le harcèlement via internet, les réseaux sociaux et les téléphones ?</h1>
        <h4> {this.state.question.content} </h4>
        <h4><img src='/images/triangle.png' alt=''/>Le cybo-harcèlement</h4>
        <h4><img src='/images/cross.png' alt=''/>Le cyber-harcèlement</h4>
        <h4><img src='/images/circle.png' alt=''/>Le cybharcèlement</h4>
        <h4><img src='/images/square.png' alt=''/>Le web harcèlement</h4>

      </div>
    );
  }
}

export default Question1;