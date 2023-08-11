import React from 'react';
import './style.css';

const ListItem = ({ item: { coverSrc, title, price, size, color } }) => {
  return (
    <div className='listItem-wrap'>
      <img src={coverSrc} alt={title} />
      <header className='list-title'>
        <h4>{title} {size} {color}</h4>
      </header>
      <footer className='list-price'>
        <p><b>{price} грн</b></p>
      </footer>
    </div>
  )
}

export default ListItem