// Write your code here

import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  render() {
    const {Item, DeleteTodo} = this.props
    const {title, id} = Item
    const onDeleteTodo = () => {
      DeleteTodo(id)
    }
    return (
      <li className="TodoItem">
        <p className="Text">{title}</p>
        <button className="button" type="button" onClick={onDeleteTodo}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
