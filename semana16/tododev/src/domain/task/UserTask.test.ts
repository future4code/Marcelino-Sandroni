import {UserTask} from './UserTask'
import {Task} from './Task'

describe('UserTask constructors and methods', () => {
  const title = 'Food for my dog'
  const description = 'Go to market and buy more food for the little dog'
  let newTask: Task

  it('Should build a basic task with title', () => {
    newTask = new UserTask(title)
    expect(newTask).toMatchObject({title})
  })

  it('Should add a new description with valid text', () => {
    expect(() => {
      newTask.description = description
    }).not.toThrow()

    expect(newTask.description).toBe(description).toBeString()
  })

  it('Should throw error with invalid description', () => {
    const previousDescription = newTask.description
    expect(() => {
      newTask.description = ''
    }).toThrow('cant set description with invalid value')
    expect(newTask.description).toBe(previousDescription)
  })
})
