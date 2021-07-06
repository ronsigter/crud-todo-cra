const CreateTodo = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor='title'>title:</label>
          <input type='text' id='title' name='title' />
        </div>
        <div>
          <label htmlFor='description'>description:</label>
          <input type='text' id='description' name='description' />
        </div>
        <button type='submit'>Add Activity</button>
      </form>
    </div>
  )
}

export default CreateTodo
