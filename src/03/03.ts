import { UserType } from "../02/02";
import { CityType, GovernmentBuildingsType, HousesType } from "../02/02-02";

export const sum = (a: number, b: number) => {
    return a + b;
}

const result = sum(sum(2, 3), sum(5, 0));

//  USER
export function addSkill(user: UserType, skill: string) {
    user.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeUserActive(user: UserType) {
    user.isActive = true;
}

export function doesUserLiveInCity(user: UserType, cityName: string) {
    return user.address.city.cityName === cityName;
}

// CITY
export function addMoneyToBudget(govBuilding: GovernmentBuildingsType, budget: number) {
    govBuilding.budget += budget;
}

// export function demolishHousesOnStreet(city: CityType, centrals: string) {}

export function repairHouse(housesType: HousesType) {
    return housesType.repaired = true;
}

export function toFireStaff(govBuilding: GovernmentBuildingsType, staffToFire: number) {
    govBuilding.staffCount -= staffToFire;
}

export function toHireStaff(govBuilding: GovernmentBuildingsType, staffToHire: number) {
    govBuilding.staffCount += staffToHire;
}