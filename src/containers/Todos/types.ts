import { Todos } from 'GlobalTypes'
import { MutationStatus } from 'react-query'

export type LoaderProps = {
  status: MutationStatus
  items: Todos
}
