module.exports = {
    "collectCoverageFrom": [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts",
        "!src/toolbox/**"
    ],
    "roots": [
        "<rootDir>/src",
    ],
    "testMatch": [
        "<rootDir>/src/**/*.{spec,test}.{ts,tsx}",
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest",
    },
    "transformIgnorePatterns": [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node",
    ]
};
