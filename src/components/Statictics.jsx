import StatisticsCard from "./StatisticsCard";
import Recognition from './assets/icon-brand-recognition.svg'
import records from './assets/icon-detailed-records.svg'
import customizable from './assets/icon-fully-customizable.svg'
const Statictics = () => {
  return (
    <section className='statistics mt-1 text-center'>
      <h1 className="text-4xl sm:text-3xl"> Advanced Statistics</h1>
      <p className="w-3/6 mx-auto my-3 leading-relaxed sm:w-full ">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="cards flex justify-between items-center gap-10 my-40 sm:grid sm:text-center sm:my-24 relative">
        <StatisticsCard img={Recognition} h1={'Brand Recognition'} p={'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'} />
        

        <StatisticsCard img={records} h1={'Detailed Records'} p={'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'} />

        <StatisticsCard img={customizable} h1={'Fully Customizable'} p={'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'} />

        <div className="green-line absolute h-2 w-3/5 "></div>
        

      </div>
    </section>
  );
};

export default Statictics;
