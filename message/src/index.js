import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './home.js';

const myStyle = {
  fontSize : 100,
  color : '#00FFFF'
}

class Title extends React.Component{
  render(){
    return <h1>{this.props.title}</h1>
  }
}

class Link extends React.Component{
  render(){
    return <a href={this.props.link}>{this.props.link}</a>
  }
}

class Main extends React.Component{
  render(){
    return(
      <div>
        <Title title={this.props.title}/>
        <Link link={this.props.link}/>
      </div>
    );
  }
}

ReactDOM.render(<Home />,document.getElementById('root'));

registerServiceWorker();
