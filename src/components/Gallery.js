import React from 'react'

const Gallery = (props) => {
  return (
    <div className="gallery">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="gallery-item-wrapper">
          <div />
        </div>
      ))}
    </div>
  )
}

export default Gallery