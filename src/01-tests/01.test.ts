import { mult, splitIntoWords, sum } from "./01";

// data
let a: number;
let b: number;

beforeEach( () => {
    a = 3;
    b = 5;
})

test('sum should be correct', () => {
    // action
    let result = sum(a, b);

    // expected result
    expect(result).toBe(8);
})

test('multiply should be correct', () => {

    let multResult = mult(a, b);

    expect(multResult).toBe(15);
})

test('splitting sentences into words should be correct', () => {
    // data
    let sent1 = "Hello my friends"
    let sent2 = "How do you do?"

    // action
    let result1 = splitIntoWords(sent1);
    let result2 = splitIntoWords(sent2);

    // expected result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friends");

    expect(result2.length).toBe(4)
    expect(result2[0]).toBe("how");
    expect(result2[1]).toBe("do");
    expect(result2[2]).toBe("you");
    expect(result2[3]).toBe("do?");
})