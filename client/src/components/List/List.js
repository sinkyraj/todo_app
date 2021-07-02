import { useContext } from 'react'

import { 
  ListGroup, 
  ListGroupItem 
} from 'reactstrap';

import ItemContext from '../../Utils/ItemContext'

const List = () => {
  const { items } = useContext(ItemContext)
return(
  <>
  {/* <h1>This is List</h1> */}
    <ListGroup>
      {

        items.map(item=> <ListGroupItem key = {item._id}>{item.text}</ListGroupItem>)
      }

      {/* <ListGroupItem disabled tag="a" href="#">Take out Trash</ListGroupItem>
      <ListGroupItem tag="a" href="#">Cook dinner</ListGroupItem>
      <ListGroupItem tag="a" href="#">Do Laundry</ListGroupItem>
      <ListGroupItem tag="a" href="#">Walk dog</ListGroupItem> */}
      
    </ListGroup>
  </>

)

}

export default List