import React from "react";
import FilterInput from "./FilterInput";

import searchIcon from '../../assests/images/search.svg';
import favouriteIcon from '../../assests/images/favourite.svg';

function FilterSection(){
    return (
        <form action="/" id="filter-section">
            <FilterInput pid="dish-search" img={searchIcon} inputId="dish-search" inputType="text" inputPlaceholder="Search for Dishes" />
            <FilterInput pid="veg-only" inputId="veg-only-checkbox" inputType="checkbox" text="Veg Only"/>
            <FilterInput pid="favourite-filter" img={favouriteIcon} text="Favourite" />
    </form>
    )
}

export default FilterSection;