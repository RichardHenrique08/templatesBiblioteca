import NavbarHome from "./Components/Navbar/NavbarHome";
import HeadersHome from "./Components/Headers/HeadersHome";

export default function Home() {
  return (
    <main className="">
      <div className='flex flex-col'>
        <div className="">
          <NavbarHome />
        </div>
         <div className="">
           <HeadersHome />
         </div>
        
      </div>
     
    </main>
  );
}
