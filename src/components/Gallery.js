import React, { useState, useEffect } from 'react'

import mock1 from '../assets/mock-1.png'
import mock2 from '../assets/mock-2.png'
import mock3 from '../assets/mock-3.png'
import mock4 from '../assets/mock-4.png'
import mock5 from '../assets/mock-5.png'
import mock6 from '../assets/mock-6.png'

const Gallery = (props) => {
  const [gallery, setGallery] = useState([])

  // For demo
  useEffect(() => {
    setGallery([
      {
        type: 2,
        src: mock2,
        title: 'Lorem Ipsum'
      },
      {
        type: 2,
        src: mock2,
        title: 'Lorem Ipsum'
      },
      {
        type: 2,
        src: mock2,
        title: 'Lorem Ipsum'
      },
      {
        type: 3,
        src: mock3,
        title: 'Lorem Ipsum'
      },
      {
        type: 2,
        src: mock2,
        title: 'Lorem Ipsum'
      },
      {
        type: 1,
        src: mock1,
        title: 'Lorem Ipsum'
      },
      {
        type: 6,
        src: mock6,
        title: 'Lorem Ipsum'
      },
      {
        type: 2,
        src: mock2,
        title: 'Lorem Ipsum'
      },
      {
        type: 4,
        src: mock4,
        title: 'Lorem Ipsum'
      },
      {
        type: 1,
        src: mock1,
        title: 'Lorem Ipsum'
      },
      {
        type: 5,
        src: mock5,
        title: 'Lorem Ipsum'
      }
    ])
  }, [])

  return (
    <div className="gallery">
      {gallery.map((gal, i) => (
        <div
          key={i}
          className={`gallery-item-${gal.type}`}>
          <div className="gallery-overlay">
            <div className="gallery-info">
              <p>{gal.title}</p>
            </div>
          </div>
          <img src={gal.src} />
        </div>
      ))}
    </div>
  )
}

export default Gallery