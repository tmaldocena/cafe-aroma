const ReadyTo = () => {
  return (
    <div className="w-full my-32">
        <div className="xl:mx-64 mx-32 flex flex-col text-center justify-center items-center ">
            <img src="logo.svg" alt="logo" height={64} width={64} className="text-center mb-4" />
            <h2 className="text-5xl font-grotesque font-bold text-bone">Ready for a taste of <span className="text-light-brown">heaven</span>?</h2>
            <h2 className="text-5xl font-grotesque font-bold text-bone">Visit our coffee heavens today!</h2>
            <div className="mt-8 flex gap-8">
                <a href="#" className="bg-bone px-5 py-2 rounded-sm font-montserrat font-normal transition-all hover:bg-light-brown hover:scale-105 hover:shadow-lg hover:font-semibold">Find a location</a>
                <a href="#" className="bg-light-brown px-5 py-2 rounded-sm font-montserrat font-normal transition-all hover:bg-bone hover:scale-105 hover:shadow-lg hover:font-semibold">Our menu</a>
            </div>
        </div>
    </div>
  )
}

export default ReadyTo