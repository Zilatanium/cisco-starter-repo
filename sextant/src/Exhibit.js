import React from "react"
import Card from 'react-bootstrap/Card';

function Exhibit() {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Data Point Title</Card.Title>
            <Card.Text>
              Displays data for user
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }

export default Exhibit;