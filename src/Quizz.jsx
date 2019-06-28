import React, {Component} from 'react';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4'
import Question5 from './Question5'


/* const questions = [
  {Question1: 'Qu\'en pensez-vous?'},
  {Question2: 'Avez-vous déjà été harcelé?'},
  {Question3: 'Que pensez-vous de vos actes?'},
] */



class Quizz extends Component {
  constructor(props){
    super(props);
    this.state={
      /* questions: [], */
      step: 1,

    }
  }

  addOne = () => {
    this.setState ({
      step: this.state.step +1,
    })
  }

  removeOne = () => {
    this.setState ({
      step: this.state.step -1,
    })
  }


  nextQuestions = () => {
    let result;
    const { step } = this.state;
    switch (step) {
      case 1:
        result = <Question1 />;
        break;
      case 2:
        result = <Question2 />;
        break;
      case 3:
        result = <Question3 />;
        break;
      case 4:
        result = <Question4 />;
        break;
      case 5:
        result = <Question5 />;
        break;
      default:
        result = <Question1 />;
    }
    return result;
  }

  render() {
    const {step} = this.state;
    return(
      <div className="Quizz">
        <h1> {step} </h1>
        {this.nextQuestions()}
        <button  onClick={this.removeOne}>QUESTION PRÉCÉDENTE</button>
        <button onClick={this.addOne}>QUESTION SUIVANTE</button>
      </div>
    );
  }
}

export default Quizz;