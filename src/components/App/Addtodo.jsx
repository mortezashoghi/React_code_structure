import React,{Component} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {insertTodo} from '../../redux';
import Todolist from './Todolist';

class Addtodo extends Component{
constructor(props){
    super(props),
    this.state={
        input:''
    }
}
    changeInputvalue=(event)=> {
        if(event.target.value===''){
            alert("تسک خالی است");
        }else{
        this.setState({input:event.target.value});
        }
    } 

    clickAddnew=()=>{
        this.props.insertTodo(this.state.input);
        this.setState({input:''});
    }
render(){
    return(
        <div className="container" >
             <Header/>
            <div className="container-fluid">
            <div className="row">
            <div className="span6" style={{float:"none",margin:'0 auto'}}>
            <input type="text" className="input-group-lg" value={this.state.input} onChange={this.changeInputvalue}/>
            <button onClick={this.clickAddnew}  >افزودن</button>
            </div>
            </div>
            </div>
<Todolist/>
        </div>
    );
}

}

export default connect(null,{insertTodo})(Addtodo);