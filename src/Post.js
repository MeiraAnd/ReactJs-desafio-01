import React, { Component, Fragment} from 'react';
import PostHeader from './PostHeader';

class Post extends Component {
    render() {
        return (
         <Fragment>
            
            <div className="postBox">      

                <PostHeader name={this.props.data.name} date={this.props.data.date}/>
                
                <hr/>

                <div className="text">
                    {this.props.data.description}
                </div>

            </div>
        </Fragment>
        );
    }
}

export default Post;