const config = {};

config.project = {
  name: "ml-application-framework-demo"
};

// Admin privileges for MarkLogic setup
config.auth = {
  user: 'USERNAME',
  pass: 'PASSWORD',
  sendImmediately: false
};

config.host = "localhost";

// Proxy server
config.server = {
  port: 4000
}

config.databases = {
  content: {
    name: config.project.name + "-content"
  },
  modules: {
    name: config.project.name + "-modules"
  },
};

config.rest = {
  "rest-api": {
    name: config.project.name + "-rest",
    database: config.databases.content.name,
    "modules-database": config.databases.modules.name,
    port: 8077,
    "error-format": "json"
  },
  security: {
    authentication: "basic"
  },
  // security: {
  //   authentication: "application-level", 
  //   "default-user": config.project.name + "-user"
  // },
  options: {
    name: "search-options",
    file: "search-options.xml"
  }
};

config.xdbc = {
  "server-name": config.project.name + "-xdbc",
  "server-type": "xdbc",
  "group-name": "Default",
  "content-database": config.databases.content.name,
  root: "/",
  port: 8006
};

// NOTE Role config if needed, Entity Viewer role privileges listed below
config.role = {
  "role-name": config.project.name + "-role", 
  "privilege": [
    {
      "privilege-name": "xdmp:eval",
      "action": "http://marklogic.com/xdmp/privileges/xdmp-eval",
      "kind": "execute"
    },
    {
      "privilege-name": "xdmp:eval-in",
      "action": "http://marklogic.com/xdmp/privileges/xdmp-eval-in",
      "kind": "execute"
    },
    {
      "privilege-name": "unprotected-collections",
      "action": "http://marklogic.com/xdmp/privileges/unprotected-collections",
      "kind": "execute"
    },
    {
      "privilege-name": "unprotected-uri",
      "action": "http://marklogic.com/xdmp/privileges/unprotected-uri",
      "kind": "execute"
    }
  ]
}

config.user = {
  "user-name": config.project.name + "-user", 
  "password": "password",
  // "role": [ config.project.name + "-role", "rest-admin", "hadoop-user-all" ] // NOTE Entity Viewer roles
  "role": [ "rest-admin" ] 
}

config.content = [
  {
    collection: "person",
    path: "person"
  },
  {
    collection: "organization",
    path: "organization"
  }
];

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = config;
}