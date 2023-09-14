const MoreInfoCard = ({ text, number }) => {
  return (
    <div className={`flex flex-col items-center bg-light-brown py-8 bg-opacity-50`}>
        <span className="font-grotesque font-bold text-4xl">{ number }</span>
        <span className="font-montserrat text-lg mt-1">{ text }</span>
        <a href="#" className="font-grotesque text-lg text-black mt-3 transition-all hover:underline cursor-pointer">See More</a>
    </div>
  )
}

export default MoreInfoCard