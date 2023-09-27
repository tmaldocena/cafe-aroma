import MoreInfoCard from "../components/MoreInfoCard"

const MoreInfo = () => {
  return (
    <div className="w-full mt-6">
        <div className="xl:mx-64 mx-16 grid grid-cols-2 items-stretch gap-2">
            <MoreInfoCard text='Artisanal Roasts' number='25' />
            <MoreInfoCard text='Cozy Locations' number='5' />
        </div>
    </div>
  )
}

export default MoreInfo