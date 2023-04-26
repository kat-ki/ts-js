import { CityType } from "../02/02-02";
import { addMoneyToBudget, repairHouse, toFireStaff, toHireStaff } from "./03";
// data
let city: CityType;

beforeEach(() => {
    city = {
        title: "Washington",
        houses: [{
            builtAt: 2012, repaired: false,
            address: {
                number: 100,
                street: {
                    title: "George"
                }
            }
        }, {
            builtAt: 2018, repaired: false,
            address: {
                number: 36,
                street: {
                    title: "Roosevelt"
                }
            }
        }, {
            builtAt: 1996, repaired: true,
            address: {
                number: 78,
                street: {
                    title: "Centrals"
                }
            }
        }],
        governmentBuildings: [
            {
                type: "Hospital",
                budget: 200000,
                staffCount: 500,
                address: {
                    street: {
                        title: "South street"
                    },
                    number: 2
                }},
            {
                type: "Fire Station",
                budget: 345000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Park street"
                    },
                    number: 11
                }}
        ],
        citizensNr: 1000000
    }
})

test('budget for Hospital should be increased', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)
    // expected result
    expect(city.governmentBuildings[0].budget).toBe(300000);

})

test('budget for Fire Station should be decreased', () => {
    addMoneyToBudget(city.governmentBuildings[1], -45000)
    // expected result
    expect(city.governmentBuildings[1].budget).toBe(300000);

})

// test('Houses should be demolished', () => {
//     demolishHousesOnStreet(city, "Centrals")
//     // expected result
//     expect(city.houses.length).toBe(2);
//     expect(city.houses[2]).toBe(0);
//
// })

test('House should be repaired', () => {
    repairHouse(city.houses[0])
    // expected result
    expect(city.houses[0].repaired).toBe(true);

})

test('staff should be fired', () => {
    toFireStaff(city.governmentBuildings[0], 10)
    // expected result
    expect(city.governmentBuildings[0].staffCount).toBe(490);

})

test('staff should be hired', () => {
    toHireStaff(city.governmentBuildings[1], 10)
    // expected result
    expect(city.governmentBuildings[1].staffCount).toBe(210);

})