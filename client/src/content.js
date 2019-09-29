import React, {Component} from 'react';
import { API } from './config';
import axios from 'axios';

class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
        this.getPost();
        console.log(this.state);

        this.getPost = this.getPost.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.addPost = this.addPost.bind(this);
    }

    getPost() {
        axios.get(API.BASE)
            .then ( response => {
                console.log(response);
                this.setState({
                    posts: response.data
                });
            })
            .catch( error => {
               console.log(error); 
            });
    }

    addPost() {
        const post = {
            post: this.state.newPost
        }
        axios.post(API.BASE + API.ADD, post)
            .then( res => {
                console.log('success');
            });
    }

    onTextChange(event) {
        const value = event.target.value;
        this.setState({
            newPost: value
        });
    }

    render() {
        const {posts} = this.state;

        return(
          <div>
              {
                  posts.length ? <div>
                  {
                    posts.map((post, index) => (
                        <div key={index}>
                            {post.post}
                        </div>
                    ))

                  }
                  </div> : null
              }
            <div>
                <form onSubmit={this.addPost}>
                    <input type="text" onChange={this.onTextChange} name="newPost"/>
                    <button type="submit">submit</button>
                </form>
            </div>  
          </div>
        );

    }
}

export default Content;