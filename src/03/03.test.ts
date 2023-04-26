import { UserType } from "../02/02";
import { addSkill, doesUserLiveInCity, makeUserActive } from "./03";

let user: UserType;

beforeEach(() => {
    user = {
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
})

test('new tech skill should be added to user', () => {
    expect(user.technologies.length).toBe(3);

    addSkill(user, "Redux")

    expect(user.technologies.length).toBe(4);
    expect(user.technologies[3].title).toBe("Redux");
    expect(user.technologies[3].id).toBeDefined();
})

test("user's isActive should be true", () => {
    expect(user.isActive).toBe(false);

    makeUserActive(user)

    expect(user.isActive).toBe(true);
})

test("does user live in city?", () => {

    let res1 = doesUserLiveInCity(user, "New York");
    let res2 = doesUserLiveInCity(user, "Washington");

    expect(res1).toBe(false);
    expect(res2).toBe(true);
})