import React from "react"
import LocationCard from "../Locations/card"
import Search from "../search"

const Locations = props => {
  const locations = props.data.wpgraphql.locations.nodes

  return (
    <>
    <div className="pt-4">
    <Search />
    </div>
      <div className="position-relative list-wrapper">
        <div className="list-container pt-4">
          {locations.map(location => (
            <LocationCard key={location.id} data={location} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Locations
