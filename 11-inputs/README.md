# Working with Inputs in GitHub Actions

Inputs are a valuable feature in GitHub Actions, enabling workflows and custom actions to accept and utilize input parameters. They can be used in **custom actions**, **reusable workflows**, and **manually triggered workflows**.

## Overview

- The `inputs` object becomes accessible in a workflow when triggered, allowing users to define input parameters.  
- Each entry `inputs.<name>` represents individual input values passed from an external workflow or trigger event.  
- **Inputs are stored as environment variables** during runtime. GitHub maps input parameters to environment variables (e.g., `INPUT_<NAME>` in custom actions) for dynamic use during execution.  

---

### Reusable Workflows

- Inputs are defined under the `workflow_call` key in the `on` definition of the workflow.  
- Accessed via the `inputs` context (e.g., `${{ inputs.<name> }}`).  

---

### Manually Triggered Workflows

- Inputs are defined under the `workflow_dispatch` key in the `on` definition of the workflow.  
- Accessed via the `inputs` context (e.g., `${{ inputs.<name> }}`).  

---

### Custom Actions

- Inputs are defined in the `action.yaml` file in the custom action definition.  
- Mapped to environment variables with an `INPUT_` prefix (e.g., `INPUT_VERSION` for an input named `version`).  

---

### Key Notes

- **Environment Variables**:  
  - In workflows, use `${{ inputs.<name> }}`.  
  - In custom actions, inputs are accessed via environment variables (e.g., `$INPUT_<NAME>`).  

- **Required vs. Optional**:  
  Define `required: true` for mandatory inputs or provide a `default` value for optional ones.  

- **Security**: Avoid passing sensitive data (e.g., API keys) directly as inputs. Use [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) instead.  