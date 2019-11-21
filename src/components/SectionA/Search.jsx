import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default function Search() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div>
      <div className="section-search-btn">
        <input type="text " placeholder="Ex. food,services ..." />
        <Dropdown
          isOpen={dropdownOpen}
          toggle={toggle}
          className="section-dropdwon"
        >
          <DropdownToggle caret>
            This dropdown menu is right-aligned
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <button type="submit" className="search-btn">
          Search...
        </button>
      </div>
      <div className="commision-btns">
        <button>
          <i className="fas fa-utensils"></i>
          Restaurant
        </button>
        <button>
          <i className="fas fa-hotel"></i>
          Hotel
        </button>
        <button>
          <i className="fas fa-map-marker"></i>
          Places
        </button>
        <button>
          <i className="fas fa-shopping-cart"></i>
          Shopping
        </button>
      </div>
    </div>
  );
}
