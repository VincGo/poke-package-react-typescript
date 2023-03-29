import React from 'react'

type Props = {
  title?: string
}

const Title = ({ title = 'Hello' }: Props) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

export default Title
