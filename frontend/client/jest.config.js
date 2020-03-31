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
        "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
        "^.+\\.css$": "<rootDir>/configs/jest/cssTransform.js",
        "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/configs/jest/fileTransform.js"
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
