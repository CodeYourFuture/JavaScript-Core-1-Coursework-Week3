/*
    In maths, the factorial of an integer (written as n!) is the product of an integer, and all the integers below it (not including zero).
    See: https://en.wikipedia.org/wiki/Factorial
    For example,
        3! is 6 (because 3 * 2 * 1 = 6)
        5! is 120 (because 5 * 4 * 3 * 2 * 1 = 120)
    
    Using a loop, complete the function below so it returns the factorial of the number being passed in. 
*/

function factorial(input) {
    // TODO
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("3! should be 6", () => {
    expect(factorial(3)).toEqual(6);
});

test("5! should be 120", () => {
    expect(factorial(5)).toEqual(120);
});

test("10! should be 3628800", () => {
    expect(factorial(10)).toEqual(3628800);
});
