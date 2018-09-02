import React, { Fragment } from 'react'

import './Image.css'

const Image = ({ src, alt, caption, className, ...other }) => (
  <Fragment>
    <img className={`image ${className}`} src={src} alt={alt} {...other} />
    {caption && <p className="caption">{caption}</p>}
  </Fragment>
)

export default Image
