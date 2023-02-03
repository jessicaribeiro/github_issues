const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    roots: ['node_modules', '<rootDir>/'],
    modulePaths: ['node_modules', '<rootDir>/'],
    moduleNameMapper: ['node_modules', '<rootDir>/'],
}

module.exports = createJestConfig(customJestConfig)