import { map } from 'lodash'
import * as models from '../../models'

export default function clearDatabase () {
  const promises = map(models, model => model.remove({}))
  return Promise.all(promises)
}
