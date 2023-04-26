import { CityType } from "./02-02";
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

test('test city should contain 3 houses', () => {
    // action
   // let result = "";

    // expected result
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].builtAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.street.title).toBe("George");
    expect(city.houses[0].address.number).toBe(100);

    expect(city.houses[1].builtAt).toBe(2018);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.street.title).toBe("Roosevelt");
    expect(city.houses[1].address.number).toBe(36);

    expect(city.houses[2].builtAt).toBe(1996);
    expect(city.houses[2].repaired).toBe(true);
    expect(city.houses[2].address.street.title).toBe("Centrals");
    expect(city.houses[2].address.number).toBe(78);
})

test('test city should contain hospital and fire station', () => {
    // action
    // let result = "";

    // expected result
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe("Hospital");
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(500);
    expect(city.governmentBuildings[0].address.street.title).toBe("South street");

    expect(city.governmentBuildings[1].type).toBe("Fire Station");
    expect(city.governmentBuildings[1].budget).toBe(345000);
    expect(city.governmentBuildings[1].staffCount).toBe(200);
    expect(city.governmentBuildings[1].address.street.title).toBe("Park street");

})

test('test city should contain 1000000 citizens', () => {
    // action
    // let result = "";

    // expected result
    expect(city.citizensNr).toBe(1000000);
})