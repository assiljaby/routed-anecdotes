/* eslint-disable react/prop-types */
import { useField } from "../hooks/index"

const CreateNew = (props) => {
    const author = useField('text')
    const info = useField('text')
    const content = useField('text')
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      })
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input name='content' {...content} />
          </div>
          <div>
            author
            <input name='author' {...author} />
          </div>
          <div>
            url for more info
            <input name='info' {...info} />
          </div>
          <button>create</button>
        </form>
      </div>
    )
  
}

export default CreateNew