A very simple node express server with only single POST entry to trigger an upgrade request to specific rancher stack.

Trigger build by sending `POST` request to `<whaterveryourhost.is/?commit=What%20wrong>`

You need to set those environment variables for this docker to run properly

- `RANCHER_URL=<Your project URL>`, should be something like `https://rancher.host/v1/projects/1a5`
- `RANCHER_ACCESS_KEY=<A 🔑>`, generate it from Rancher UI
- `RANCHER_SECRET_KEY=<Another 🔑>`, comes with your generated key
- `RANCHER_STACK_ID=1e2`, stack you want to upgrade
- `RANCHER_STACK_NAME=<Your name>`, name of the stack you want to upgrade, I am lazy enough to pull that automatically
- `SLACK_WEBHOOK=<Retrieve from Slack integration board>`, alarm messages to SLACK channel
