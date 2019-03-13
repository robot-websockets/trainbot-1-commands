module.exports = {
    apps: [
        {
            name: 'motors',
            script: '/home/pi/trainbot-1/motor-controller/main.py',
            args: ['-S', '192.168.55.1'],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'proximity-sensor',
            script: '/home/pi/trainbot-1/proximity-sensor/distance.py',
            args: ['-S', '192.168.55.1'],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        }
    ]
};
