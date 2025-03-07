# Pipelines

## What is Continuous Integration (CI)?

Continuous Integration (CI) is the practice of using automation to build and test software every time a developer commits changes to version control. CI helps teams discover issues early in the development process and fix them quickly.

CI involves integrating tested code into a shared branch multiple times a day. Continuous Delivery (CD) extends this by ensuring that the integrated code is packaged and stored in a repository for potential release. Continuous Deployment (CD) takes it a step further by automatically deploying the packaged code to production.

## Example CI Pipeline

In this example, you're using `npm` to install the `bats` software testing package by using the `run` keyword. You can also run a script as an action. You can store the script in your repository, often done in a `.github/scripts/` directory, and then supply the path and shell type using the `run` keyword.

```yaml
jobs:
  example-job:
    steps:
      - name: Run build script
        run: ./.github/scripts/build.sh
        shell: bash
```

This repository contains a set of different pipelines.