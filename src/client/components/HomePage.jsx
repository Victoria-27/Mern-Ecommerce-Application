import Navigation from "./Navigation"
import Carousel from "../Carousel"
import Footer from "./Footer"
import ProductCategory from "./ProductCategory"
import EcommerceContext from "../../context/EcommerceContext";
import {useEffect, useState, useContext} from "react"


function HomePage() {
  const { userCart, getAllSelectedCartItem } = useContext(EcommerceContext);

  //get all cart items according to user id
  let qtty = 0;
  useEffect(() => {
      getAllSelectedCartItem(localStorage.getItem("userId"));
      
    }, []);
    
    userCart.forEach((qty) => {
      qty.products.forEach((item) => {
        qtty += Number(item.quantity);
        // return qtty
        console.log(qtty+" homepage");
           
      });
    });
  //total qtt


 

  return (
    <>
      <Navigation qtty = {qtty} />
      <Carousel />
      <ProductCategory />
      <Footer />
    </>
  );
}

export default HomePage
