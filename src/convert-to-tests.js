const fs = require('fs')

const ap = require('./data/ap.js')
const apSolutions = require('./data/apSolutions.js')
const array = require('./data/array.js')
const arraySolutions = require('./data/arraySolutions.js')
const logic = require('./data/logic.js')
const logicSolutions = require('./data/logicSolutions.js')
const object = require('./data/object.js')
const objectSolutions = require('./data/objectSolutions.js')
const quiz = require('./data/quiz.js')
const quizSolutions = require('./data/quizSolutions.js')
const recursion = require('./data/recursion.js')
const recursionSolutions = require('./data/recursionSolutions.js')
const string = require('./data/string.js')
const stringSolutions = require('./data/stringSolutions.js')
const warmup = require('./data/warmup.js')
const warmupSolutions = require('./data/warmupSolutions.js')

function loadSets() {
  const fullSets = [
    [ap, apSolutions],
    [array, arraySolutions],
    [logic, logicSolutions],
    [object, objectSolutions],
    [quiz, quizSolutions],
    [recursion, recursionSolutions],
    [string, stringSolutions],
    [warmup, warmupSolutions]
  ]
  const groupedSets = {}
  fullSets.forEach(set => {
    let [problems, solutions] = set
    problems.forEach(problem => {
      let setKey = problem.title.replace(/[^\w\d]/, '').toLowerCase()
      let setTitle = problem.title.replace('-', ' ')
      if (!groupedSets[setKey]) {
        groupedSets[setKey] = {
          key: setKey,
          title: setTitle,
          problems: [],
          solutions: {}
        }
      }
      let solutionFn = solutions[problem.name]
      let [_, fnName, fnParams] = solutionFn.toString().match(/^function (.*)\((.*)\)/)
      problem.paramsList = fnParams.trim().length > 0 ? fnParams.split(',').map(s => s.trim()) : []
      groupedSets[setKey].problems.push(problem)
      groupedSets[setKey].solutions[problem.name] = solutionFn
    })
  })
  return groupedSets
}

function template_require(moduleName) {
  return `const ${moduleName} = require('../${moduleName}');\n`
}

function template_test(moduleName, functionName, argsList, returnValue) {
  let argsStr = argsList.map(a => JSON.stringify(a)).join(', ')
  let argsStrDesc = argsList.length === 1 ? argsStr : `(${argsStr})`
  let returnStr = JSON.stringify(returnValue)
  return `test('${functionName} should return ${returnStr} when given ${argsStrDesc}', () => {\n  expect(${moduleName}.${functionName}(${argsStr})).toEqual(${returnStr});\n});\n`
}

function template_function(functionName, paramsList) {
  let paramsStr = paramsList.join(', ')
  return `function ${functionName}(${paramsStr}) {\n}\n`
}

function template_exports(functionNameList) {
  let functionNameListStr = functionNameList.join(',\n  ')
  return `module.exports = {\n  ${functionNameListStr}\n};\n`
}

function template_md_title(text) {
  return `# ${text}\n`
}

function template_md_subtitle(text) {
  return `## ${text}\n`
}

function template_md_body(text) {
  text = text.replace(/\s+/g, ' ')
  return `${text}\n`
}

function template_md_table_header(functionName, paramsList) {
  let paramsStr = paramsList.join(', ')
  return `${functionName}(${paramsStr})|Expected\n-|-\n`
}

function template_md_table_row(functionName, argsList, returnValue) {
  let argsStr = argsList.map(a => JSON.stringify(a)).join(', ')
  let returnStr = JSON.stringify(returnValue)
  return `\`${functionName}(${argsStr})\` | &#10132; \`${returnStr}\`\n`
}

function run() {
  const sets = loadSets()
  Object.keys(sets).forEach(k => {
    let set = sets[k]
    let setKey = set.key
    let setTitle = set.title
    let problems = set.problems
    let solutions = set.solutions

    let mdFileOut = ''
    let srcFileOut = ''
    let testFileOut = ''

    mdFileOut += template_md_title(setTitle)
    testFileOut += template_require(setKey)

    problems.forEach(problem => {
      mdFileOut += template_md_subtitle(problem.name)
      mdFileOut += template_md_body(problem.question)
      mdFileOut += template_md_table_header(problem.name, problem.paramsList)

      problem.inputs.forEach(input => {
        let args = eval(input.replace(/^\(/, '[').replace(/\)$/, ']'))
        if (problem.inputType == 'object') {
          args = args.map(arg => Object.fromEntries(arg))
        }
        let solution = solutions[problem.name](...structuredClone(args))

        mdFileOut += template_md_table_row(problem.name, args, solution)
        testFileOut += '\n' + template_test(setKey, problem.name, args, solution)
      })

      srcFileOut += template_function(problem.name, problem.paramsList) + '\n'
    })

    srcFileOut += template_exports(problems.map(p => p.name))

    fs.writeFileSync(__dirname + '/../output/docs/' + setKey + '.md', mdFileOut)
    fs.writeFileSync(__dirname + '/../output/' + setKey + '.js', srcFileOut)
    fs.writeFileSync(__dirname + '/../output/__tests__/' + setKey + '.test.js', testFileOut)
  })
}

run()
