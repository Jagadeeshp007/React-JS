import {Component} from "react";

class SampleForm extends Component{

    constructor(props){
        super(props)

        this.state={
            firstName : '',
            lastName : '',
            country :''
        }
    }
   
    handleFirstName=(event)=>{
        this.setState({
            firstName:event.target.value
        })
    }
    handleLastName=(event)=>{
        this.setState({lastName:event.target.value})
    }
    handleCountry=(event)=>{
        this.setState({country:event.target.value})
    }
    render(){
        return(
            <>
            <h1>Welcome to Form Handling</h1>
            <form>
                <div className="form-gorup" >
                    <lable className="form-lable">First Name</lable>
                    <input className="form-control" value={this.state.firstName} onChange={this.handleFirstName}/>
                </div>
                <div className="form-gorup">
                    <lable className="form-lable">Last Name</lable>
                    <input className="form-control" value={this.state.lastName} onChange={this.handleLastName} />
                </div>
                <div className="form-gorup">
                    <lable className="form-lable">Country</lable>
                    <select className="form-select" value={this.state.country} onChange={this.handleCountry} >
                        <option value="">--select the country</option>
                        <option value="India">India</option>
                        <option value="Not India">Not India</option>
                    </select>
                </div>
            </form>
            <br/>
            <button className="btn btn-success">Register</button>
            <hr/>
            <div>
               Fist Name : {this.state.firstName}
               <br/>
               Last Naem : {this.state.lastName}
               <br/>
               Country : {this.state.country}
            </div>
            </>
        )
    }
}
export default SampleForm;
