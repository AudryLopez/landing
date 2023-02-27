import Logo from '@/components/ui/logo/logo';

interface props {
  scrollToRef: any;
  useRefProps: any;
}

export default function Header({ scrollToRef, useRefProps }: props) {
  const { homeRef, aboutRef, contactRef } = useRefProps

  return(
    <header className='container mx-auto h-16 px-6 flex flex-row justify-between items-center'>
      <Logo />
      <ul className='flex flex-row justify-center gap-6'>
        <li onClick={()=> scrollToRef(homeRef)} className='no-underline hover:underline border-blue-700  cursor-pointer'>Home</li>
        <li onClick={()=> scrollToRef(aboutRef)} className='no-underline hover:underline cursor-pointer'>About</li>
        <li onClick={()=> scrollToRef(contactRef)} className='no-underline hover:underline cursor-pointer'>Contact</li>
      </ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Request</button>
    </header>
  )
} 