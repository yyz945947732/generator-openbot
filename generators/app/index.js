"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        `Welcome to the premium ${chalk.red("generator-openbot")} generator!`
      )
    );

    const prompts = [
      {
        name: "link",
        message: "Link you want to open automatically",
        default: "https://www.google.com"
      },
      {
        name: "isServeNeed",
        message: "Need a live serve file?",
        type: "confirm",
        default: true
      }
    ];
    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const { isServeNeed } = this.props;
    this.fs.copyTpl(
      this.templatePath("autoOpen.html"),
      this.destinationPath("autoOpen.html"),
      this.props
    );
    if (isServeNeed) {
      this.fs.copyTpl(
        this.templatePath("serve.js"),
        this.destinationPath("serve.js")
      );
      this.npmInstall("live-server", {
        global: true
      });
    }
  }
};
