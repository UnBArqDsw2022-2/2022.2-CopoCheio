module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'componentType',
        message: 'What type of component do you want to create?',
        choices: [
          'Atom',
          'Molecule',
          'Organism',
          'Template',
          'Page'
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component Name: '
      }
    ],
    actions: function (data) {
      const actions = []

      if (data.componentType === 'Atom') {
        actions.push({
          type: 'addMany',
          destination: 'src/components/atoms/{{pascalCase name}}',
          templateFiles: 'plop-templates/*.hbs'
        })
      } else if (data.componentType === 'Molecule') {
        actions.push({
          type: 'addMany',
          destination: 'src/components/molecules/{{pascalCase name}}',
          templateFiles: 'plop-templates/*.hbs'
        })
      } else if (data.componentType === 'Organism') {
        actions.push({
          type: 'addMany',
          destination: 'src/components/organisms/{{pascalCase name}}',
          templateFiles: 'plop-templates/*.hbs'
        })
      } else if (data.componentType === 'Template') {
        actions.push({
          type: 'addMany',
          destination: 'src/components/templates/{{pascalCase name}}',
          templateFiles: 'plop-templates/*.hbs'
        })
      } else if (data.componentType === 'Page') {
        actions.push({
          type: 'addMany',
          destination: 'src/components/pages/{{pascalCase name}}',
          templateFiles: 'plop-templates/*.hbs'
        })
      } 

      return actions
    }
  })
}
