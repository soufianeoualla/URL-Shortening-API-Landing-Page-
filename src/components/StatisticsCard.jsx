
const StatisticsCard = (props) => {

    const {img, h1, p} = props
 
  return (
    <div className="statistics-card rounded pt-12 px-6 pb-6 bg-white text-left sm:text-center relative z-10">
        <div className="icon flex justify-center items-center w-20 h-20 rounded-full absolute">
        <img 
        src={img} alt="" />
        </div>
        
        <h1 className="my-5 text-2xl sm:text-xl">{h1}</h1>
        <p>{p}</p>
    </div>
  )
}

export default StatisticsCard