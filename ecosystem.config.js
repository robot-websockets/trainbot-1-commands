module.exports = {
    apps: [
        {
            name: 'motors',
            script: '/home/pi/trainbot-1/motor-controller/main.py',
            args: ['-W', '192.168.55.1:5001'],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'proximity-simulator',
            script: '/home/pi/trainbot-1/proximity-tester/app.js',
            args: [`--websocket_address=192.168.55.1:5001`],
            autorestart: true,
            watch: false
        }
    ]
};
