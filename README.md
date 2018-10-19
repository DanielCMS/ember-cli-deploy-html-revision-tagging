# ember-cli-deploy-html-revision-tagging

> An ember-cli-deploy plugin to tag the key generated from [ember-cli-deploy-revision-data](https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data) to your html file. It reads the `tagVariable` from your config file, and do a simple replacement to the html file.

## What is an ember-cli-deploy plugin?

A plugin is an addon that can be executed as a part of the ember-cli-deploy pipeline. A plugin will implement one or more of the ember-cli-deploy's pipeline hooks.

For more information on what plugins are and how they work, please refer to the [Plugin Documentation][1].

## Quick Start
To get up and running quickly, do the following:

- Ensure [ember-cli-deploy-revision-data][2] and [ember-cli-deploy-build][3] are installed and configured

- Install this plugin


## Installation
Run the following command in your terminal:

```bash
ember install ember-cli-deploy-html-revision-tagging
```

## ember-cli-deploy Hooks Implemented

For detailed information on what plugin hooks are and how they work, please refer to the [Plugin Documentation][1].

- `didPrepare`

## Configuration Options

For detailed information on how configuration of plugins works, please refer to the [Plugin Documentation][1].

### Defaults
```
ENV["html-revision-tagging"] = {
  tagVariable: '$ui-version'
}
```
## Prerequisites

The following properties are expected to be present on the deployment `context` object:

- `revisionKey` (provided by [ember-cli-deploy-revision-data][2])
- `distDir`   (provided by [ember-cli-deploy-build][3])

## Why `ember build` and `ember test` don't work

Since this is a node-only ember-cli addon, this package does not include many files and dependencies which are part of ember-cli's typical `ember build` and `ember test` processes.

[1]: http://ember-cli-deploy.com/ "Plugin Documentation"
[2]: https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data "ember-cli-deploy-revision-data"
[3]: https://github.com/ember-cli-deploy/ember-cli-deploy-build "ember-cli-deploy-build"
[4]: https://github.com/ember-cli/ember-cli-deploy "ember-cli-deploy"
