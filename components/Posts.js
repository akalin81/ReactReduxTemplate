import React, { PropTypes, Component } from 'react'

export default class Posts extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) =>
          <li key={i}><img src={post.thumbnail} width='100' height='100'/> {post.title} </li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
