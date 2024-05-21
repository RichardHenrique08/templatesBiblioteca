import Link from "next/link";

export default function NavbarHome() {
  return (
    <>
      <div className="flex justify-between border-b-2 pb-3">
        <div className="">
          <button className="border border-black rounded-xl px-8 py-1 mt-4 ml-10 font-semibold hover:bg-slate-950 hover:text-white transition duration-300 ease-in-out ">
            Get Started{" "}
          </button>
        </div>
        <ul className="flex gap-8  text-xl font-bold mr-20 mt-4 ">
          <li className="hoverBorder">
            <Link href="/">Home</Link>
          </li>
          <li className="hoverBorder">
            <Link href="/pages/login">Biblioteca</Link>
          </li>
          <li className="hoverBorder">
            <Link href="/pages/about">Sobre</Link>
          </li>
          <li className="hoverBorder">
            <Link href="/pages/Contatos">Contatos</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
