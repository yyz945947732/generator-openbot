"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-github-profile:app", () => {
  beforeEach(() => {
    const answers = {
      link: "https://www.google.com",
      isServeNeed: true
    };
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts(answers);
  });

  it("creates files", () => {
    const files = ["autoOpen.html", "serve.js"];
    assert.file(files);
  });

  it("fills the README with options", () => {
    assert.fileContent(
      "autoOpen.html",
      "const web = window.open('https://www.google.com')"
    );
  });
});
