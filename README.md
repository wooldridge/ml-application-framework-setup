# ml-application-framework-setup

## Usage

1. Clone the project:
```
git clone https://github.com/wooldridge/ml-application-framework-setup
```
2. Copy `config_sample.js` and save as `config.js` in project root.

3. Edit `config.js` for your environment. At a minimum, edit `config.auth` for your MarkLogic Server.

4. In a new terminal, install the project dependencies from the project root using npm:
```
cd ml-application-framework-setup
npm install
```
This will install dependencies for the setup script, proxy server, and React UI. You can also install dependencies separately by running `npm install` from each subdirectory.

5. From the project root, run the setup script:
```
node setup.js
```
This will set up your MarkLogic Server (create databases, a REST server, a user, etc.) and load the application documents. 

After setup, you can view your MarkLogic Server configuration in the Admin UI (http://localhost:8001) and the loaded documents in Query Console (http://localhost:8000/qconsole).
