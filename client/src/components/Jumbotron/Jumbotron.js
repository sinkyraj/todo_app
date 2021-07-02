import { Jumbotron as Jmbtrn } from 'reactstrap'

const Jumbotron = () => {
  return (
    <Jmbtrn>
      <h1 className='display-3'>To-Do List Application</h1>
      <p className='lead'>This is a simple application for adding items to a to-do list</p>
      <hr className='my-2' />
    </Jmbtrn>
  )
}

export default Jumbotron
