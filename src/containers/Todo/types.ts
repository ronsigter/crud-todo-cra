import { Todo } from 'GlobalTypes'
import { MutationStatus } from 'react-query'

export type LoaderProps = {
  status: MutationStatus
  item: Todo
}
