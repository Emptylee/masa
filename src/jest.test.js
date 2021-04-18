test("common matcher", () => {
  expect(1 + 1).toBe(2);
  expect(2 + 2).not.toBe(5);
});

test("true or false", () => {
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});

test("number", () => {
  expect(4).toBeGreaterThan(3);
  expect(5).toBeLessThanOrEqual(6);
});

test('object',()=>{
    expect({name:'Lee',age:12}).toEqual({age:12,name:'Lee'})
})