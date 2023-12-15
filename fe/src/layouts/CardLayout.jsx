import { Row, Container } from 'react-bootstrap'

import { Card } from '../components/Card'

import PLACES from '../data/places.json'

export const CardLayout = () => {
  return (
    <div className="">
      <Container fluid>
        <Row>
          {PLACES.length > 0 &&
            PLACES?.map(place => <Card key={place.id} {...place} />)}
        </Row>
      </Container>
    </div>
  )
}
