import React from 'react';
import './Comments.css';
import ApiService from '../../services/api-service';
import CommentsContext from '../../contexts/CommentsContext';

class Comments extends React.Component {
  static contextType = CommentsContext;

  handleDeleteComment = (event) => {
    const { id } = this.props;
    event.preventDefault();
    ApiService.deleteComment(id)
      .then(ApiService.getComments(id)
        .then(comments => this.context.setCommentsList(comments))
      )
      .catch(error => this.context.setError(error)
      )
    }

  render() {
    const { id, desc, date, thread, owner, solution } = this.props;
    return (
        <li key={id} className="ticket">
          <p>{id}</p>
          <h2>{owner}</h2>
          <h3>{date}</h3>
          <h4>{thread}</h4>
          <p>{desc}</p>
          <p>{solution}</p>
          <button type="button">Mark Solution</button>
          <button type="button">Edit</button>
          <button type="button" onClick={this.handleDeleteComment}>Delete</button>
        </li>
    )
  }
}

export default Comments;