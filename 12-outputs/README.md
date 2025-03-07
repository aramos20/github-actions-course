# Working with Outputs in GitHub Actions

In GitHub Actions, outputs allow you to pass data between different jobs within the same workflow. This can be incredibly useful for sharing results or data produced in one job with others that depend on it. Let's explore how to work with job outputs in GitHub Actions.

## Overview

- **Outputs** act as parameters that allow you to declare and share data between jobs.
- You can use `jobs.<job_id>.outputs` to define outputs for a specific job.
- Job outputs containing expressions are evaluated at the end of each job.
- Outputs that contain secrets are redacted on the runner and not exposed in GitHub Actions logs.

---

## Example: Using Outputs in a Workflow

Here's an example to demonstrate how outputs work in a GitHub Actions workflow:

```yaml
name: GitHub Actions Outputs Example

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      result: ${{ steps.build.outputs.result }}
    steps:
      - name: Build
        id: build
        run: echo "result=success" >> "$GITHUB_OUTPUT"

  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deployment
        env:
          BUILD_STATUS: ${{ needs.build.outputs.result }}
        run: echo "Build Status: $BUILD_STATUS"
```

### Explanation:
- The **`build` job** defines an output named `result` using `jobs.build.outputs.result`.
- The **`deploy` job** depends on `build` (via `needs: build`).
- The **`deploy` job** accesses the `result` output from `build` using `needs.build.outputs.result`.

---

## Key Concepts

### Declaring Outputs
Use `outputs.<name>` in the job definition to declare an output.
```yaml
outputs:
  result: ${{ steps.build.outputs.result }}
```

### Accessing Outputs
Use `needs.<job_id>.outputs.<name>` in dependent jobs.
```yaml
env:
  BUILD_STATUS: ${{ needs.build.outputs.result }}
```

### Security Considerations
- Outputs containing **secrets** are automatically redacted in logs.
- Avoid exposing sensitive information via outputs.

### Common Use Cases
- **Share build artifacts** (e.g., filenames, versions).
- **Pass status flags** (e.g., `success`/`failure`).
- **Chain dependent jobs dynamically** based on previous job results.

