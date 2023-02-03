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
          destination: 'src/components/atoms/',
          templateFiles: 'plop-templates/*.tsx.hbs'
        });
      } else if (data.componentType === 'Molecule') {
        actions.push({
          type: 'addMany',
          destination: 'src/components/molecules/',
          templateFiles: 'plop-templates/*.tsx.hbs'
        });
      } else if (data.componentType === 'Organism') {
        actions.push({
          type: 'addMany',
          destination: 'src/components/organisms/',
          templateFiles: 'plop-templates/*.tsx.hbs'
        });
      } else if (data.componentType === 'Template') {
        actions.push({
          type: 'addMany',
          destination: 'src/components/templates/',
          templateFiles: 'plop-templates/*.tsx.hbs'
        });
      } else if (data.componentType === 'Page') {
        actions.push({
          type: 'addMany',
          destination: 'src/components/pages/',
          templateFiles: 'plop-templates/*.tsx.hbs'
        });
      } 

      return actions
    }
  })
}
