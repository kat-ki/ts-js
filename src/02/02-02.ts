export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNr: number
}

export type HousesType = {
    builtAt: number
    repaired: boolean
    address: AddressType
}
export type AddressType = {
    street: StreetType
    number: number
}
export type StreetType = {
    title: string
}
export type GovernmentBuildingsType = {
    type: "Hospital" | "Fire Station"
    budget: number
    staffCount: number
    address: AddressType
}
