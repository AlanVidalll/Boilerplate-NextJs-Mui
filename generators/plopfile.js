/* module.exports = function (plop) {
  plop.setGenerator('controller', {
    description: 'application component',

    // inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Controller name?'
      }
    ],

    // actions to perform
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}//index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}//stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },

      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}//styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}//test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
 */

module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/index.stories.tsx',
        templateFile: 'templates/index.stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/index.test.tsx',
        templateFile: 'templates/index.test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      }
    ]
  })
}
