Matt's sample app using Couchbase and AngularJS

To install do the following:

   * Install Ubuntu 14.04

   * Download http://packages.couchbase.com/releases/3.0.0-beta/couchbase-server_3.0.0-beta_x86_64_ubuntu_1204.deb

   * Run “sudo dpkg -i couchbase-server_3.0.0-beta_x86_64_ubuntu_1204.deb”

   * Run “sudo wget -O/etc/apt/sources.list.d/couchbase.list http://packages.couchbase.com/ubuntu/couchbase-ubuntu1404.list"

   * Run “sudo apt-get install node”

   * Run “sudo apt-get install npm”

   * Run “npm install express”

   * Run “sudo apt-get install git”

   * Pull down the code “git clone https://github.com/scotch-io/node-todo.git”

   * Install couchbase SDK 2.0 “npm install https://registry.npmjs.org/couchbase/-/couchbase-2.0.0-beta.tgz”

   * Resolve Ununtu node clash “sudo update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10” - Not working properly - Had to recompile the couch base client with nodes rather than node in binding.gyp

   * Fell back to normal client
   
   * Run “npm install -g nodemon"

   * Run “nodemon server.js" to get the app running

   * Browse to http://127.0.0.1:3000 to view the app

Note: Only ever do “sudo node rebuild”

Enjoy! :-)
