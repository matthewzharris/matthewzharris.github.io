import React from 'react'

import Image from './Image'

import './AnnotatedImage.css'

const AnnotatedImage = ({
  children,
  image,
  imageAlt,
  flexDirection = 'column',
}) => (
  <div className={`row flex-${flexDirection}`}>
    <div className={`col-md-${flexDirection === 'column' ? '12' : '6'}`}>
      {children}
    </div>
    <div
      className={`text-center col-md-${
        flexDirection === 'column' ? '12' : '6'
      }`}
    >
      <Image className="annotated-image" image={image} alt={imageAlt} />
    </div>
  </div>
)

export default AnnotatedImage
