import { useState, useEffect } from 'react'

import './index.css'
import { Col, Card as BootstrapCard, Badge } from 'react-bootstrap'

import TAGS from '../../data/tags.json'

export const Card = ({
  id = '',
  tags = [],
  name = '',
  body = '',
  img_url = '',
}) => {
  const [tagsMap, setTagsMap] = useState({})

  useEffect(() => {
    // console.log({ TAGS })

    const tagsMap = {}

    TAGS.forEach(tag => {
      tagsMap[tag.id] = tag
    })

    // console.log({ tagsMap })

    setTagsMap(tagsMap)
  }, [])
  // console.log({ id, name, tags, body, tagsMap })

  if (img_url !== '') {
    return (
      <Col xs={12} sm={6} md={3} lg={3} key={id}>
        <div className={'card-main'}>
          <BootstrapCard style={{ width: 220 }} className={'card-text-center'}>
            <BootstrapCard.Img
              variant="top"
              className={'rounded-img'}
              alt={'card-image'}
              src={img_url}
              width={'100%'}
            />
            <BootstrapCard.Body>
              <BootstrapCard.Title className={'card-text-title'}>
                {name}
              </BootstrapCard.Title>
              <BootstrapCard.Text className={'card-text-body'}>{body}</BootstrapCard.Text>

              {tagsMap &&
                tags.map((tagId, idx) => {
                  // console.log({ tagId })
                  return (
                    <span key={`${id}-${tagId}-${idx}`}>
                      <Badge className={'card-badge'}>
                        {tagsMap?.[tagId]?.name}
                      </Badge>
                    </span>
                  )
                })}
            </BootstrapCard.Body>
          </BootstrapCard>
        </div>
      </Col>
    )
  }
  return null
}
