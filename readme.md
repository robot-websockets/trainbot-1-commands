# Trainbot 2

file structure of the folders

place all folders in a folder in the Pi's home dir called trainbot-1

```bash
~/trainbot-1
            - motor-controller
            - proximity-sensor
            - trainbot-1-commands
```

## Clone the repos from GitHub

```bash
# clone this repo inside ~/trainbot-1
git clone https://github.com/robot-websockets/trainbot-1-commands.git

# clone the motor-controller inside ~/trainbot-1
git clone https://github.com/robot-websockets/motor-controller.git

pip3 install "python-socketio[client]"

# clone the motor-controller inside ~/trainbot-1
git clone https://github.com/robot-websockets/proximity-sensor.git
```

## Install pm2 process manager.

```javascript
sudo npm install pm2 -g
```

To run pm2 at boot run the following script:

```bash
# execute the ecosystem.config.js file
pm2 start /path-to-file/ecosystem.config.js

# save the config file so it can be run at startup
pm2 save

# copy, paste and execute the result
pm2 startup
```

### Other commands

https://pm2.io/doc/en/runtime/overview/

```bash
# start a new service
pm2 start ./file.ext

# stop a  service
pm2 stop motor-controller

#list all processes
pm2 ls

#view dashboard
pm2 monit

# restart a service
pm2 restart all
# or
pm2 restart motor-controller

# stop and remove a service
pm2 delete all
# or
pm2 delete motor-controller
```
