const webSocketServerIpAddress = `192.168.55.1`;
module.exports = {
    apps: [
        {
            name: 'motors',
            script: '/home/pi/trainbot-1/motor-controller/main.py',
            args: ['-S', `${webSocketServerIpAddress}`, '-M', 40],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'proximity-sensor',
            script: '/home/pi/trainbot-1/proximity-sensor/distance.py',
            args: ['-S', `${webSocketServerIpAddress}`],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        }
    ]
};
