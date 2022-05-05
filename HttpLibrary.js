import axios from "axios";
import {Component} from "react";

class HttpLibrary extends Component{
    constructor(props){
        super(props)

        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        //Http Call
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                console.log(response)
                this.setState({
                    posts:response.data
                })
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render(){
        return(
            <>
            <h1>welcome to HTTP Library</h1>
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>USER ID</th>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>BODY</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.posts.map(post=>(
                            <tr>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td><button className="btn btn-primary">Edit</button> |
                                <button className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}
export default HttpLibrary;