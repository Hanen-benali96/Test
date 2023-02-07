import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './types.css'
function TypesCard({cat}) {
  return (
    <div className='mt-3'>
    <Card style={{ width: "10rem" }}>
      <Card.Body>
        <Card.Title
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "cursive",
          }}
        >
          {cat}
        </Card.Title>
        <Link to={`/jokes/${cat}`}>
          <Button variant='success'>Jokes</Button>
        </Link>
      </Card.Body>
    </Card>
  </div>
  )
}

export default TypesCard