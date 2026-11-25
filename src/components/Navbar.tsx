import { useEffect, useState } from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';

interface navLinks {
    id: number;
    title: string;
    path: string;
}
const navLinks:navLinks[] = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: '/#about' },
  { id: 3, title: "Services", path: "/services" },
  { id: 4, title: "Project", path: "/contact" },
];

const Navbar = () => {
    
const [isScrolled, setIsScrolled] = useState(false);

 useEffect(() => {
    const handleScroll = () => {
      // Trigger border once user scrolls past 10px
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header className={`nav fixed top-0 w-full left-0 bg-ivory self-center flex justify-center border-b ${
        isScrolled ? "border-[#f1ebe2]/20" : "border-transparent"}`}>
        <div className='container flex content-center justify-between py-5 px-4 m-auto w-full max-w-7xl'>
            <Link to="/" className='text-2xl font-medium text-sand logo font-display self-center'>Zaahar</Link>

            <nav className='hidden lg:flex content-center'>
                <ul className='flex items-center text-white gap-8'>
                    {navLinks.map((navLink) => {
                        return (
                            <li key={navLink.id}>
                            <Link to={navLink.path} className='hover:underline underline-offset-6'>{navLink.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <Button href="#projects" variant='outline'>
                Let's talk
            </Button>
        </div>
      
    </header>
    </>
  )
}

export default Navbar
