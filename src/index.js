import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
class App extends React.Component{
   render(){
       return(
           <h1>Food Panda</h1>
       )
   }
}
ReactDOM.render(<App />, document.getElementById('app'))