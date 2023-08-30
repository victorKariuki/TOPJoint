const appName =
    process.env.NODE_ENV === "production"
        ? "topjoint_api-production"
        : "topjoint_api-development";

module.exports = {
    apps: [
        {
            name: appName,
            script: "npm run start",
            instances: 2,
            exec_mode: "cluster",
            env_production: {
                NODE_ENV: process.env.NODE_ENV,
            },
            env_development: {
                NODE_ENV: process.env.NODE_ENV,
            },
            watch: false,
            "log_date_format": "YYYY-MM-DD HH:mm Z"
        },
    ],
};
