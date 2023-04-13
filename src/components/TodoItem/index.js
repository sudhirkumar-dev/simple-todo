// Write your code here

const TodoItem = props => {
  const {todoDetails, deleteTodo} = this.props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <l1 className="list">
      <p>{title}</p>
      <button type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </l1>
  )
}

export default TodoItem
