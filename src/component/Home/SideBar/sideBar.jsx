import React from 'react';
import { categoryList, sizeList } from '../../constants';
import FilterListToggle from '../../common/filterListToogle';
import './style.css';
import CheckboxProton from '../../common/CheckboxProton';
import SliderProton from '../../common/SliderProton';
import SizeListToggle from '../../common/SizeListToogle';
import ClearFilters from '../../common/ClearFilters';

const SideBar = ({
  selectedCategory,
  selectToggle,
  selectedSize,
  selectSize,
  colors,
  changeChecked,
  changedPrice,
  selectedPrice,
  selectClear,
  clearedFilters
}) => {
  return (
    <div>
      {/* Gender */}
      <div className="input-group" >
        <p className="label">Gender</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      {/* Size */}
      <div className="input-group" >
        <p className="label">Size</p>
        <SizeListToggle
          options={sizeList}
          value={selectedSize}
          selectToggle={selectSize}
        />
      </div>
      {/* Color */}

      <div className="input-group" >
        <p className="label">Color</p>
        {colors.map(color =>
          <CheckboxProton
            key={color.id}
            color={color}
            changeChecked={changeChecked}
          />
        )}
      </div>

      {/* Price Range */}
      <div className="input-group" >
        <p className="label-range">Price Range</p>
        <SliderProton
          value={selectedPrice}
          changedPrice={changedPrice}
        />
      </div>

      {/* Clean Filters*/}
      <ClearFilters 
        value={clearedFilters}
        selectToggle={selectClear}
      />
    </div>
  )
}

export default SideBar