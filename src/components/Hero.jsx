import hero_img from './assets/illustration-working.svg'
const Hero = () => {
  return (
    <section className='hero grid  items-center mt-24 grid-cols-2 sm:grid-cols-1'>
      <div className='sm:text-center'>
        <h1 className='text-6xl mb-4 leading-tight sm:text-4xl'>More than just shorter links</h1>
        <p className='mb-8 w-4/5 my-auto mx-0 leading-7 sm:w-full' >
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <a href="" className="primary-btn ">  Get Started</a>
      </div>
      <div className="hero-image sm:row-start-1 sm:mb-8 relative ">
        <img src={hero_img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
