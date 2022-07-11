const utils = require("../src/utils");

describe("handler methods", () => {
  it("correct greeting is generated", () => {
    expect(utils.getLocalGreeting("en")).toBe("Hello!");
    expect(utils.getLocalGreeting("fr")).toBe("👋");
  });
});
