import React from "react";

const loginData = [{username: 'Kiprop', password: '12345'}];
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        }
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    // handleChange(e) {
    //     this.setState({value: e.target.value});
    //   }
    
      handleSubmit(e) {
        e.preventDefault();
        if (this.state.username === loginData[0].username && this.state.password === loginData[0].password) {
            this.props.history.push("/");
        } else {
            console.log("Sorry try again");
        }
      }
    
    render() {
    return (
        <div className= "login">
        <form>
        <div className="form-group">
            <label>Username</label>
            <input type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value})} className="form-control" id="username" placeholder="Enter your username here" />
            {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" value={this.state.password}  onChange={(e) => this.setState({password: e.target.value})} className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="Submit" onClick={this.handleSubmit} className="btn btn-primary">login</button>
        </form>
        </div>
    )
}
}

export default Login;
