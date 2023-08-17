import React, { useState } from 'react';
// import './style.css'; // Підключіть ваш стиль

export let dataList = [
  {
    id: 1,
    title: 'Футболка чоловіча',
    price: 460,
    size: 'S',
    gender: 'male',
    color: 'White',
    type: 't-shirt',
    coverSrc: '/images/t-shirts-white.jpg',
  },
  {
    id: 2,
    title: 'Футболка чоловіча',
    price: 470,
    size: 'XS',
    gender: 'male',
    color: 'White',
    type: 't-shirt',
    coverSrc: '/images/t-shirts-white.jpg',
  },
  {
    id: 3,
    title: 'Футболка жіноча',
    price: 560,
    size: 'L',
    gender: 'female',
    color: 'White',
    type: 't-shirt',
    coverSrc: '/images/t-shirts-white.jpg',
  },
  {
    id: 4,
    title: 'Футболка жіноча',
    price: 460,
    size: 'M',
    gender: 'female',
    color: 'Black',
    type: 't-shirt',
    coverSrc: '/images/t-shirts-black.jpg',
  },
  {
    id: 5,
    title: 'Футболка чоловіча',
    price: 660,
    size: 'XS',
    gender: 'male',
    color: 'Black',
    type: 'sweetshirt',
    coverSrc: '/images/t-shirts-black.jpg',
  },
  {
    id: 6,
    title: 'Футболка чоловіча',
    price: 660,
    size: 'M',
    gender: 'male',
    color: 'Black',
    type: 'sweetshirt',
    coverSrc: '/images/t-shirts-black.jpg',
  },
  {
    id: 7,
    title: 'Футболка чоловіча',
    price: 660,
    size: 'M',
    gender: 'male',
    color: 'White',
    type: 'sweetshirt',
    coverSrc: '/images/t-shirts-white.jpg',
  },
  {
    id: 8,
    title: 'Футболка чоловіча',
    price: 520,
    size: 'S',
    gender: 'male',
    color: 'Black',
    type: 't-shirt',
    coverSrc: '/images/t-shirts-black.jpg',
  },
  {
    id: 9,
    title: 'Футболка жіноча',
    price: 460,
    size: 'S',
    gender: 'female',
    color: 'White',
    type: 'sweetshirt',
    coverSrc: '/images/t-shirts-white.jpg',
  },
  {
    id: 10,
    title: 'Футболка чоловіча',
    price: 460,
    size: 'S',
    gender: 'male',
    color: 'White',
    type: 't-shirt',
    coverSrc: '/images/t-shirts-white.jpg',
  },
  {
    id: 11,
    title: 'Футболка чоловіча',
    price: 530,
    size: 'S',
    gender: 'male',
    color: 'White',
    type: 't-shirt',
    coverSrc: '/images/t-shirts-white.jpg',
  },
  {
    id: 12,
    title: 'Футболка чоловіча',
    price: 470,
    size: 'XS',
    gender: 'male',
    color: 'White',
    type: 't-shirt',
    coverSrc: '/images/t-shirts-white.jpg',
  },
  {
    id: 13,
    title: 'Футболка жіноча',
    price: 560,
    size: 'L',
    gender: 'female',
    color: 'White',
    type: 't-shirt',
    coverSrc: '/images/t-shirts-white.jpg',
  },
  {
    id: 14,
    title: 'Футболка жіноча',
    price: 460,
    size: 'M',
    gender: 'female',
    color: 'Black',
    type: 't-shirt',
    coverSrc: '/images/t-shirts-black.jpg',
  },
  {
    id: 15,
    title: 'Футболка чоловіча',
    price: 660,
    size: 'XS',
    gender: 'male',
    color: 'Black',
    type: 'sweetshirt',
    coverSrc: '/images/t-shirts-black.jpg',
  },
  {
    id: 16,
    title: 'Футболка чоловіча',
    price: 660,
    size: 'M',
    gender: 'male',
    color: 'Black',
    type: 'sweetshirt',
    coverSrc: '/images/t-shirts-black.jpg',
  },
  {
    id: 17,
    title: 'Футболка чоловіча',
    price: 660,
    size: 'M',
    gender: 'male',
    color: 'White',
    type: 'sweetshirt',
    coverSrc: '/images/t-shirts-white.jpg',
  },
  {
    id: 18,
    title: 'Футболка чоловіча',
    price: 520,
    size: 'S',
    gender: 'male',
    color: 'Black',
    type: 't-shirt',
    coverSrc: '/images/t-shirts-black.jpg',
  },
  {
    id: 19,
    title: 'Футболка жіноча',
    price: 460,
    size: 'S',
    gender: 'female',
    color: 'White',
    type: 'sweetshirt',
    coverSrc: '/images/t-shirts-white.jpg',
  },
]

console.log(dataList)

const AddNewGood = () => {
  const [newGood, setNewGood] = useState({
    id: dataList.length + 1,
    title: '',
    price: 0,
    size: '',
    gender: '',
    color: '',
    type: '',
    coverSrc: '',
  });

  const titles = ['Футболка чоловіча', 'Футболка жіноча', 'Світшот чоловічий', 'Світшот жіночий'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const genders = ['male', 'female'];
  const colors = ['White', 'Black'];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setNewGood((prevGood) => ({
        ...prevGood,
        coverSrc: event.target.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGood((prevGood) => ({
      ...prevGood,
      [name]: value,
    }));
  };

  const handleAddNewGood = () => {
    // Перевірка на коректність даних перед додаванням
    if (
      newGood.title &&
      newGood.price > 0 &&
      newGood.size &&
      newGood.gender &&
      newGood.color &&
      newGood.coverSrc
    ) {
      // Копіюємо поточний стан списку товарів та додаємо новий товар
      const updatedDataList = [...dataList, newGood];
      // Оновлюємо список товарів
      dataList = updatedDataList;

      // Очищаємо стан форми для додавання нового товару
      setNewGood({
        id: dataList.length + 1,
        title: '',
        price: 0,
        size: '',
        gender: '',
        color: '',
        type: '',
        coverSrc: '',
      });

      // Вивід повідомлення про успішне додавання (опціонально)
      alert('New good added successfully!');
    } else {
      // Вивід повідомлення про некоректно введені дані (опціонально)
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className='add-new-good'>
      <h2>Add New Good</h2>
      <form id='contactForm'>
        <label htmlFor='title'>Title:</label>
        <select
          id='title'
          name='title'
          value={newGood.title}
          onChange={handleInputChange}
        >
          <option value='' disabled>Select a title</option>
          {titles.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>

        <label htmlFor='price'>Price:</label>
        <input
          type='number'
          id='price'
          name='price'
          value={newGood.price}
          onChange={handleInputChange}
        />

        <label htmlFor='size'>Size:</label>
        <select
          id='size'
          name='size'
          value={newGood.size}
          onChange={handleInputChange}
        >
          <option value='' disabled>Select a size</option>
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <label htmlFor='gender'>Gender:</label>
        <select
          id='gender'
          name='gender'
          value={newGood.gender}
          onChange={handleInputChange}
        >
          <option value='' disabled>Select a gender</option>
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>

        <label htmlFor='color' disabled>Color:</label>
        <select
          id='color'
          name='color'
          value={newGood.color}
          onChange={handleInputChange}
        >
          <option value=''>Select a color</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>

        <label htmlFor='image'>Image:</label>
        <input
          type='file'
          id='image'
          name='image'
          accept='image/*'
          onChange={handleImageUpload}
        />
        <button type='button' onClick={handleAddNewGood}>
          Add New Good
        </button>
      </form>
    </div>
  );
};

export default AddNewGood;
