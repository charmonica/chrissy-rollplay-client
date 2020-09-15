import config from '../config';

const ApiService = {
  getTopics() {
    return fetch(`${config.API_ENDPOINT}topics/topics`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getTopic(topicId) {
    return fetch(`${config.API_ENDPOINT}topics/${topicId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postTopic(title, topic_owner, rpg_system, topic_desc, topic_passphrase) {
    return fetch(`${config.API_ENDPOINT}topics`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        topic_owner: topic_owner,
        rpg_system: rpg_system,
        topic_desc: topic_desc,
        topic_passphrase: topic_passphrase
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  editTopic(topic_id, title, topic_desc, rpg_system) {
    return fetch(`${config.API_ENDPOINT}topics/${topic_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        topic_id: topic_id,
        title: title,
        topic_desc: topic_desc,
        rpg_system: rpg_system
      }),
    })
    .then(res => res.json
      )
  },
  deleteTopic(topic_id) {
    return fetch(`${config.API_ENDPOINT}topics/${topic_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
  },
  getComments(topic_id) {
    return fetch(`${config.API_ENDPOINT}comments/${topic_id}`, {
      method: 'GET',
      headers: {
        'content-type':'application/json'
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getAllComments() {
    return fetch(`${config.API_ENDPOINT}comments/comments`, {
      method: 'GET',
      headers: {
        'content-type':'application/json'
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(comment_owner, comment_passphrase, comment_desc, topicId) {
    return fetch(`${config.API_ENDPOINT}comments/${topicId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        comment_owner: comment_owner,
        comment_passphrase: comment_passphrase,
        comment_desc: comment_desc,
        comment_thread: topicId
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  editComment(comment_id, comment_desc) {
    return fetch(`${config.API_ENDPOINT}comments/${comment_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        comment_id: comment_id,
        comment_desc: comment_desc
      }),
    })
  },
  deleteComment(comment_id) {
    return fetch(`${config.API_ENDPOINT}comments/${comment_id}`, {
      method: 'DELETE',
    })
  },
}

export default ApiService;