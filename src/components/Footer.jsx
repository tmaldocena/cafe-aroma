import { InstagramLogoIcon, SpeakerLoudIcon, TwitterLogoIcon } from "@radix-ui/react-icons"


const Footer = () => {
  return (
    <footer className="w-full bg-dark py-10">
        <div className="xl:mx-64 mx-32 flex flex-col text-center items-center">
            <div className="flex gap-4">
                <a href="#" className="text-white"><TwitterLogoIcon height={24} width={24} /></a>
                <a href="#" className="text-white"><InstagramLogoIcon height={24} width={24}/></a>
                <a href="#" className="text-white"><SpeakerLoudIcon height={24} width={24}/></a>
            </div>
            <h1 className="text-white text-xl mt-6">&copy; 2023 Café Aroma, All rights reserved.</h1>
        </div>
    </footer>
  )
}

export default Footer