[![Build Status](https://travis-ci.org/julianghionoiu/couchbase-angular-sample.svg?branch=master)](https://travis-ci.org/julianghionoiu/couchbase-angular-sample)
[![Dependency Status](https://gemnasium.com/julianghionoiu/couchbase-angular-sample.svg)](https://gemnasium.com/julianghionoiu/couchbase-angular-sample)

Matt's sample app using Couchbase and AngularJS

To install do the following:

   * Download & Install Couchbase beta2 (Make sure you follow the instructions for your OS... ;-))
     * Ubuntu: http://packages.couchbase.com/releases/3.0.0-beta2/couchbase-server_3.0.0-beta2_x86_64_ubuntu_1204.deb
     * OSX: http://packages.couchbase.com/releases/3.0.0-beta2/couchbase-server_3.0.0-beta2_x86_64.zip

   * Ubuntu:
      * Run “sudo apt-get install node”
      * Run “sudo apt-get install npm”
      * Run “npm install”

   * OSX:
      * Install HomeBrew (http://brew.sh/)
      * Run "brew install node"
      * Run "brew install npm"


   * Pull down the code from this repository
   * Run "npm install"
   
   * Ensure the Couchbase database is started
   * Run the unit tests with "npm test"
   
   * Start the application with npm start
   * Browse to http://127.0.0.1:3000 to view the app
   * Run the functional tests with "npm run function-test"

   * To stop the service run "npm stop"

Issues on Ubuntu:

   * Resolve Ununtu node clash “sudo update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10” - Not working properly - Had to recompile the couch base client with nodes rather than node in binding.gyp

   Note: Only ever do “sudo node rebuild”

Enjoy! :-)
