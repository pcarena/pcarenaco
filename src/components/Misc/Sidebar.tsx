import React, { useState } from 'react';
import LinkTo from "../LinkTo";
import { getCategories } from "../../utils/utils";

const Sidebar = () => {
  const [openDD, setOpenDD] = useState(false);
  const BRANDS = ['Apple','Dell', 'Asus', 'Acer','Razer', 'MSI'];

  // Mapping of brands to categories
  const brandCategories = {
    Apple: 'Apple',
    Dell: 'Dell',
    Acer: 'Acer',
    Asus: 'Asus',
   Razer : 'Razer',
    MSI: 'MSI',
    
  };
  
  return (
    <div className="sidebar">
      <div className="logo">LAPTOP FINDER</div>
      <div className="brands-grid">
        {BRANDS.map((brand, index) => (
          <LinkTo
            key={index}
            href={"/blog?category=" + encodeURIComponent(brandCategories[brand as keyof typeof brandCategories])}
            passHref
            className="block text-sm py-2 px-2 border-t border-gray-400"
          >
            <a href="#">{brand}</a>
          </LinkTo>
        ))}
      </div>
      <div className="options">
        <LinkTo
          href="/blog"
          passHref
          className="float-left"
        >
          <a>All Brands</a>
        </LinkTo>
        <a href="#" className="float-right">
          Rumor Mills
        </a>
      </div>

      <style>
  {`
    .sidebar {
      color: white;
      padding: 1px;
      left: 0;
    }

    .logo  {
      font-size: 1.25rem;
      font-weight: bold;
      text-align: center;
      background-color: #BBBBBB;
      margin-bottom: 1px;
    }
    .logo:hover {
      background-color: red; 
    }
    .brands-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
    }
    
    .brands-grid a,
    .options a {
      display: block;
      padding: 1px;
      font-size: 0.75rem;
      text-align: center;
      color: black;
      background-color: #EFEBE9;
    }
    
    .brands-grid a:hover,
    .options a:hover {
      background-color: red;
      color: white; /* Add this line to change text color on hover */
    }
    
    .options {
      display: flex;
      justify-content: space-between;
      background-color: #4b5563;
      margin-top: 1px;
    }

    .options a {
      display: flex;
      justify-content: center; /* Aligning content horizontally */
      align-items: center; /* Aligning content vertically */
      flex-grow: 1; /* Make each option expand to fill available space equally */
      padding: 1px ;
      font-size: 0.75rem;
      text-align: center;
      color: white;
      background-color:  #BBBBBB;
    }
  `}
</style>

    </div>
  );
};

export default Sidebar;
