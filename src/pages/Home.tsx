import React, { useEffect } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import { useLocation } from 'react-router'

const Home = () => {
    const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [hash])
  return (
    <div className="home">
    <section id="hero">
    
    <Container className='flex flex-col-reverse md:flex-row md:items-center lg:gap-22 gap-12 pt-26 pb-16'>
        <div className='flex flex-col flex-1 gap-6 content-center'>
            <p className='text-rise tracking-wide'>Navneet Kaur, interior designer</p>
            <h1 className='lg:text-8xl text-5xl font-normal text-sand font-display'>Designing spaces that feel like home</h1>
            <p className='text-rise text-lg max-w-md my-4'>Zaahar Art & Interiors creates elegant, functional and timeless interiors, shaped around how you live.</p>
            <div className='flex flex-col md:flex-row text-center gap-4'>
                <Button href="#">See projects</Button>
             <Button href="#projects" variant='outline'>
                Book a consultation
            </Button></div>
        </div>
        
        <div className='flex-1'>
            <img src='/hero.webp' alt='hero' className='w-full aspect-square'/>
        </div>

    
    </Container>
    </section>

    <section className='bg-alternative py-22 scroll-mt-20' id="about">
        <Container>
        <p className='font-display lg:text-6xl text-3xl max-w-3xl m-auto text-center'>Every room should hold the people who live in it, their habits, their light, their things.</p>
        </Container>
    </section>

    <section className='py-22'>
        <Container>
         
        <div className='flex flex-col gap-4 mb-14'>
            <h2 className='text-sand text-7xl font-display'>What I do</h2>
            <p className='text-rise'>Three ways to work together, from a single room to a full home.</p>
       
        </div>

        <div>
            <article className='grid lg:grid-cols-2 gap-2 items-center border-t border-border-light py-12 hover:pl-4 transition-p duration-300'>
                <h3 className='text-sand font-display text-3xl'>Interior design</h3>
                <p className='text-rise max-w-lg'>From concept to completion, warm and inviting homes that reflect your personality and make everyday living easier.</p>
            </article>

            <article className='grid lg:grid-cols-2 gap-2 items-center border-t border-border-light py-12 hover:pl-4 transition-p duration-300'>
                <h3 className='text-sand font-display text-3xl'>Space planning</h3>
                <p className='text-rise max-w-lg'>Layouts, furniture, lighting and décor arranged so every room feels balanced and works the way you need it to.</p>
            </article>

            <article className='grid lg:grid-cols-2 gap-2 items-center border-y border-border-light py-12 hover:pl-4 transition-p duration-300'>
                <h3 className='text-sand font-display text-3xl'>Remodeling</h3>
                <p className='text-rise max-w-lg'>Fresh layouts, cohesive colour palettes and finishes that give an existing space a new life.</p>
            </article>

        </div>
        </Container>
    </section>

    </div>
  )
}

export default Home
