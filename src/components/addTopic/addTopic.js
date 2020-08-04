import React, { Component } from 'react';

class AddTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      system: '',
      username: '',
      passphrase: '',
      description: ''
    };
  };

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val})
  }

  render() {
    const { goBack } = this.props;
    return (
      <section className="adding-topic">
        <form className="add-topic-form" onSubmit={this.handleSubmit}>
          <input type="text" name="title" onChange={this.handleChange} />
          <input type="text" name="system" onChange={this.handleChange} />
          <input type="text" name="username" onChange={this.handleChange} />
          <input type="text" name="passphrase" onChange={this.handleChange} />
          <textarea name="description" onChange={this.handleChange} />
          <button type="submit">Create New Topic</button>
          <button type="button" onClick={goBack}>Go Back</button>
        </form>
      </section>
    )
  }
}

export default AddTopic;

























// import React from 'react';
// import ApiService from "../../services/api-service.js";
// import TopicsListContext from "../../contexts/TopicsContext.js";
// import "./addTopic.css";
// import TopicsListContext from '../../contexts/TopicsContext.js';

// class AddTopic extends React.Component {
//   static contextType = TopicsListContext;

//   state = {
//     title: "",
//     topicOwner: null,
//     rpg_system: "",
//     topic_desc: ""
//   };

//   handleTopicSubmit = (e) => {
//     e.preventDefault();
//     const { topicOwner, rpg_system, topic_desc } = this.state;
//     const topic = {
//       title: e.currentTarget.title.value,
//       topic_desc: topic_desc,
//     }
//   }
// }