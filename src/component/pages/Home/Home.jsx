import React, { useEffect, useState } from "react";
import SideBar from "../../Home/SideBar/sideBar";
import ListView from "../../Home/ListView/listView";
import './style.css';
import { dataList } from "../../pages/AddingGoods/AddGood/index";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([0, 1000]);
  const [list, setList] = useState(dataList)

  const [colors, setColors] = useState([
    {
      id: 1,
      checked: false,
      label: 'White',
    },
    {
      id: 2,
      checked: false,
      label: 'Black',
    }
  ]);

  const [clearedFilters, setClearedFilters] = useState(null)

  const handleSelectCategory = (event, value) => !value ? null : setSelectedCategory(value);

  const handleSelectSize = (event, value) => !value ? null : setSelectedSize(value);

  const handleChangeChecked = id => {
    const colorsStateList = colors;
    const changeCheckedColors = colorsStateList.map(item => item.id === id
      ? {...item, checked: !item.checked}
      : item
    );
    
    setColors(changeCheckedColors)
  };

  const handleChangePrice=(event, value) => setSelectedPrice(value)

  const handleSelectClearFilters = () => {
    setSelectedCategory(null);
    setSelectedSize(null);
    setSelectedPrice([0, 1000]);
    setColors(colors.map(color => ({ ...color, checked: false })));
    setClearedFilters(null);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    

    // Gender filter

    if (selectedCategory) {
      updatedList=updatedList.filter((item) => item.gender === selectedCategory);
    }
    
    // Size filter
    if (selectedSize) {
      updatedList = updatedList.filter((item) => item.size === selectedSize)
    }

    // Color filter

    const colorChecked = colors
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase())

    if (colorChecked.length) {
      updatedList = updatedList.filter((item) => colorChecked.includes(item.color.toLowerCase()))
    }

    // Price Filter

    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter((item) => item.price >= minPrice && item.price <= maxPrice)

    // Clear Filters

    if(clearedFilters) {
      updatedList = dataList;
    }

    setList(updatedList);
  }

  useEffect(() => {
    applyFilters();
  }, [selectedSize, selectedCategory, colors, selectedPrice, clearedFilters])
  

  return (
    <div className="home">
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <SideBar
          selectToggle={handleSelectCategory}
          selectedCategory={selectedCategory}
          selectSize={handleSelectSize}
          selectedSize={selectedSize}
          colors={colors}
          changeChecked={handleChangeChecked}
          selectedPrice={selectedPrice}
          changedPrice={handleChangePrice}
          clearedFilters={clearedFilters}
          selectClear={handleSelectClearFilters}
          />
        </div>
        <div className="home_list-wrap">
          <ListView 
            list={list}
          />
        </div>
      </div>
    </div>
  )
}

export default Home;