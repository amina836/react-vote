import React,{Component} from 'react';
import './style.css'

class Vote extends Component {
    constructor(props){
        super(props)
        this.increase=this.increase.bind(this)
      }
 state={
  
    vote:0
 }

 increase(){
    this.setState({vote: this.state.vote +1 })
   }

  render() {
    return ( 
    <div className="primary" >
       
          {this.state.vote}
          <div>
          {this.props.name}
          </div>
        <button className="choose" onClick={this.increase}>Click Here</button>
    </div>
    );
  }
}

export default Vote;