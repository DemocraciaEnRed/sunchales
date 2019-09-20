import React, { Component } from 'react'
import CardsSlider from 'ext/lib/site/cards-slider/component'
import ForumCard from '../forum-card/component'

const dicContentType = {
  'ejes': 'Los ejes ',
  'propuestas': 'Las propuestas '
}

export default ({ forum }) => (
  <div className='container forum-card-container'>
    <ForumCard forum={forum} />
    <div className='forum-slider-wrapper'>
    <h4 className='forum-slider-title'>
      {/* <h4 className='forum-slider-title'>{
        forum.extra.contentType === 'ejes' && 'Los ejes '
      }
      {
        forum.extra.contentType === undefined && 'Los ejes '
      }
      {
        forum.extra.contentType === 'propuestas' && 'Las propuestas '        
      } */}
      {dicContentType[forum.extra.contentType] || 'Los ejes '}
        que comprenden esta consulta son:</h4>
      <CardsSlider forum={forum} />
    </div>
  </div>
)
