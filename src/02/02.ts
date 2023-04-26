export type UserType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

type AddressType = {
    street: string
    houseNr: number
    city: CityType
}

type CityType = {
    cityName: string
    country: string
}
type TechnologiesType = {
    id: number
    title: string
}

export const user: UserType = {
    id: 1,
    name: "Alex",
    age: 30,
    isActive: false,
    address: {
        street: "George",
        houseNr: 78,
        city: {
            cityName: "Washington",
            country: "USA"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML/CSS"
        },
        {
            id: 2,
            title: "React"
        },
        {
            id: 3,
            title: "JS/TS"
        }
    ]
}

console.log(user.address.city.country)