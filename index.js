/**
 * Created by mta on 05.06.14.
 */
/*jslint node:true, nomen:true */
/*global console, __dirname */
var path = require('path'),
    execSync = require('child_process').execSync;


var djangoManagepyRunner = function (config, baseDir, files) {
    "use strict";
    var platformEnvPythonDir = /^win/.test(process.platform) ? 'Scripts' : 'bin',
        python = config.virtualenvDir ? path.join(
            baseDir,
            config.virtualenvDir,
            platformEnvPythonDir,
            'python'
        ) : 'python',
        manage = path.join(baseDir, config.manageFile || 'manage.py');

    function callManagepy(args) {
        return execSync(python + ' ' + manage + ' ' + args, {encoding: 'utf-8'});
    }

    if (config.appendToFiles) {
        config.appendToFiles.forEach(function (command) {
            files.push({
                pattern: path.resolve(baseDir, callManagepy(command)),
                included: true,
                served: true,
                watched: false
            });
        });
    }
};

djangoManagepyRunner.$inject = ['config.djangoManage', 'config.basePath', 'config.files'];

module.exports = {
    'framework:django-manage': ['factory', djangoManagepyRunner]
};
