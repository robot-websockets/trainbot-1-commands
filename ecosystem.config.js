module.exports = {
    apps: [
        {
            name: 'motors',
            script: '/home/pi/trainbot-1/motor_controller/main.py',
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'proximity-simulator',
            script: '/home/pi/trainbot-1/proximity-tester/app.js',
            autorestart: true,
            watch: false
        }
    ]
};
