import { MutationStatus } from 'react-query'

export type InfoProps = {
  title: string
  description: string
}

export type FormProps = {
  onSubmit: (info: InfoProps) => void
  status: MutationStatus
}
