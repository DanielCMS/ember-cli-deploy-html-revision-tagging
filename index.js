const path = require('path');
const fs = require('fs');
const DeployPluginBase = require('ember-cli-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-html-revision-tagging',

  createDeployPlugin: function(options) {
    var DeployPlugin = DeployPluginBase.extend({
      name: options.name,
      defaultConfig: {
        tagVariable: null,
        distDir: function(context) {
          return context.distDir;
        },
        revisionKey: function(context) {
          let revisionKey = context.revisionData && context.revisionData.revisionKey;

          return context.commandOptions.revision || revisionKey;
        }
      },

      didPrepare() {
        this._tagVersion(this.readConfig('revisionKey'));
      },

      _tagVersion: function(version) {
        let tagVariable = this.readConfig('tagVariable');

        if (!tagVariable) {
            console.log("No tagVariable given. No version will be tagged");

            return;
        }

        let dir = this.readConfig('distDir');
        let indexFilePath = path.join(dir, 'index.html');
        let indexContent = fs.readFileSync(indexFilePath, { encoding: 'utf8' });

        indexContent = indexContent.replace(tagVariable, version);

        fs.writeFileSync(indexFilePath, indexContent);
      }
    });

    return new DeployPlugin();
  }
};
