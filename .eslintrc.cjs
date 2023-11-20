module.exports = {
    root : true,
    env : {
        node : true,
    },
    extends : [
        `@amiceli/eslint-config-base`,
        `@amiceli/eslint-config-vue`,
    ],
    rules : {
        "import/no-extraneous-dependencies" : [
            `error`,
            {
                devDependencies : [
                    `**/*.spec.ts`,
                    `**/*.spec.tsx`,
                    `vite.config.ts`,
                    `vitest.setup.ts`,
                ],
            },
        ],
    },
    overrides : [
        {
            files : [
                `¨**/*.ts`,
            ],
            extends : [
                `@amiceli/eslint-config-typescript`,
            ],
            parserOptions : {
                parser : `@typescript-eslint/parser`,
                ecmaVersion : 2020,
            },
        },
    ],
}
