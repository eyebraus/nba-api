/* eslint-disable */
export default {
    coverageDirectory: '../../coverage/packages/stdlib',
    displayName: 'stdlib',
    moduleFileExtensions: ['ts', 'js', 'html'],
    preset: '../../jest.preset.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
    },
};
