import Link from 'next/link';
import Image from 'next/image';
import img from './Layout.png'
const HeadersHome = () => {
  return (
    <>
    <div className='relative w-screen'>
        <Image className='absolute top-32 right-20 ' src={img} width={600} alt='' />
    </div>
    </>
  );
};

export default HeadersHome;
