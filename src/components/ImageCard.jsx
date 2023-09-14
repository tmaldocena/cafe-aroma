import { useState } from "react"

const ImageCard = ({ image, alt }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="grid place-items-center" onMouseEnter={ () => setHover(true) } onMouseLeave={ () => setHover(false) }>
        <img src={ image } alt={ alt } className={`object-cover ${ hover && 'blur-sm brightness-50 ' } transition-all duration-500 w-[400px] h-[400px]`} />
        {
          hover && (
            <div className="transition-all duration-500 absolute align-middle text-center w-48">
                <h1 className="text-white text-4xl font-grotesque font-bold">{ alt }</h1>
                <span></span>
            </div>
          )
        }
    </div>
  )
}

export default ImageCard