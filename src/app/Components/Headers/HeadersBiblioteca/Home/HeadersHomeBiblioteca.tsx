import React from "react";
import CardHomeBiblioteca from "./CardHomeBiblioteca";

const HeadersHomeBiblioteca = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold mt-10">
          Biblioteca de Templates
        </h1>
        <p className="w-3/4 mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          ratione aut maxime, earum, recusandae distinctio fugit deleniti
          commodi quam, qui libero. Quaerat, labore. Error, itaque. Quo delectus
          saepe aliquid non! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Architecto fugit vitae eaque fugiat perspiciatis est repudiandae
          consequuntur itaque nam. Sunt illum sapiente voluptatum at minima hic
          tempora ducimus est quis?
        </p>
      </div>
      <div className="flex justify-center gap-3 mt-8">
         <CardHomeBiblioteca
           imageUrl=""
           title="Layout Login"
           description="Login para "
           buttonText="Vizualizar"
         />
         <CardHomeBiblioteca
           imageUrl=""
           title="Layout Login 1"
           description="Login para"
           buttonText="Vizualizar"
         />
         {/* Add more CardHomeBiblioteca components with different props as needed */}
      </div>
    </div>
  );
};

export default HeadersHomeBiblioteca;
