# GitHub Actions Automation

This repository includes automated workflows for managing issues and pull requests.

## Greet and Label Workflow

**File:** `.github/workflows/greet-and-label.yml`

**Purpose:** Automatically greets new contributors and labels generous issues.

### Features

1. **Automatic Greeting**: When a new issue or pull request is opened, the workflow posts a welcoming comment:
   ```
   Thank you for raising this issue/PR! The Copilot assistant welcomes your contribution.
   ```

2. **Smart Labeling**: For issues that appear to be generous contributions, the workflow automatically adds the `gssoc2025` label. An issue is considered generous if its title or body contains:
   - `contribution`
   - `feature` 
   - `help`

### How It Works

- **Triggers**: The workflow runs when new issues or pull requests are opened
- **Permissions**: Has write access to issues and pull requests for commenting and labeling
- **API**: Uses GitHub's REST API via the `actions/github-script` action
- **Detection**: Performs case-insensitive keyword matching in issue titles and bodies

### Example Scenarios

**Will get the `gssoc2025` label:**
- Issue titled "Need help with setup"
- Issue with body containing "I want to add a new feature"
- Issue titled "My contribution to the project"

**Will NOT get the label:**
- Issue titled "Bug fix"
- Issue titled "Update documentation"
- Regular bug reports or maintenance tasks

This automation helps maintain community engagement and properly categorize contributions for events like GSSoC 2025.