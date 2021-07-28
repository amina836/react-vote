import React,{Component} from 'react';
import Vote from './components/vote';



class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 style={{textAlign:"center"}}>Vote Your Language!</h1>
        <Vote name="Php"></Vote>
        <br></br>
        <Vote name="Python"></Vote>
        <br></br>
        <Vote name="Go"></Vote>
        <br></br>
        <Vote name="Java"></Vote>
      </div>
      
    );
  }
}

export default App;

