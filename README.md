karma-django-manage
===================

Call Django manage.py command before test runs.

Install
-------

Run `npm install 100maketov/karma-django-manage`

Usage
-----

In your karma config file:
* Add `django-manage` into frameworks section.
* Configure plugin with `djangoManage` object. ``djangoManage: {appendToFiles: [], manageFile: './manage.py'},``

### Example: ###

    module.exports = function (config) {
      "use strict";
      config.set({
        basePath: '',
        frameworks: ['jasmine', 'django-manage'],
        files: [],
        exclude: [],
        djangoManage: {
          virtualenvDir: './env',
          manageFile: './manage.py',
          appendToFiles: ['command_that_return_filename']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
      });
    };


Configuration
-------------

 - __virtualenvDir__ - Path to virtualenv folder. (optional)
 - __appendToFiles__ - List of `manage.py` commands, that return filename in stdout. That filename will be added into `files` list of carma config; 
 - __manageFile__ - Path to `manage.py` file.  
