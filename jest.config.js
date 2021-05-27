module.exports = {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy",
  },
};
