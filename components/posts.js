import React, {Component} from 'react';
import axios from 'axios';

export class Posts extends Component {
	state = {
		posts: [],
		isLoaded: false
	}

	componentDidMount () {

		
		axios.get('http://staging.adrian-yale.co.uk/b_e/wp-json/wp/v2/posts')
			.then(res => this.setState({
				posts: res.data,
				isLoaded:true
			}))
			.catch( err => console.log(err))
	}

	render() {
		console.log(this.state);
		const {posts} = this.state;
		return ( 
			<div className="post-archive">
				{posts.map(post => 
					<div className="post-card">
						{console.log(post)}
						<h2>{post.title.rendered}</h2>
						<div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
					</div>

				)}


			</div>
		)
	}

}
export default Posts