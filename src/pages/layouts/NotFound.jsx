import React from 'react'
import NotFoundImg from '../../assets/images/404.png';
const NotFound = () => {
return (
<>
<div className='contenedorError'><img className='positionError' src={NotFoundImg} alt="imagen error 404"/></div>
</>
)
}
export default NotFound