import ImageCard from "../components/ImageCard"

const Glimpse = () => {
  return (
    <div className="xl:mx-64 mx-32 my-10 w-full">
        <h1 className="text-4xl font-grotesque font-bold text-light-brown">A Glimpse of Our World</h1>
        <div className="grid lg:grid-cols-square lg:grid-rows-square grid-cols-1 gap-4 items-center text-center mt-4">
            <ImageCard image='DifferentWays.jpg' alt="Different ways to drink coffee" />
            <ImageCard image='ComfyPlace.jpg' alt="Comfy place" />
            <ImageCard image='CoffeeOnDemand.jpg' alt="Coffee on demand" />
            <ImageCard image='Professional.jpg' alt="Professional baristas" />
        </div>
    </div>
  )
}

export default Glimpse