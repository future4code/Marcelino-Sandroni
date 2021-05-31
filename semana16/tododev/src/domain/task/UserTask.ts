import {BaseTask} from './Task'

export class UserTask extends BaseTask {
  constructor(title: string, tags: string[] = []) {
    super(title, tags)
  }
}
