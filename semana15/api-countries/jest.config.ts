//if you need to set root folder
//rootDir: __dirname
export default {
  rootDir: __dirname,
  displayName: "root-tests",
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  moduleDirectories: ["node_modules", "src"],
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
};

/* map module if needed
  moduleNameMapper: {
    'components/(.*)': '<rootDir>/componente/$1'
  }
  

*/
