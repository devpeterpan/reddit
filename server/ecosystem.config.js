module.exports = {
    apps: [{
        name: "reddit-server",
        script: "npm run start:production",
        watch: true,
        env: {
            "PORT": 4000,
            "NODE_ENV": "development",
            "APP_URL": "http://localhost:4000",
            "ORIGIN": "http://localhost:3000",
            "JWT_SECRET": "super_secret",
        },
        env_production: {
            "PORT": 4000,
            "NODE_ENV": "production",
            "APP_URL": "http://localhost:4000",
            "ORIGIN": "http://localhost:3000",
            "JWT_SECRET": "super_secret",
        }
    }]
}

