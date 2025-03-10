import React from 'react'
import { useRouteError } from 'react-router-dom'
useRouteError

const ErrorElement = () => {
    const error = useRouteError()
    console.group(error)
  return (
    <h4 className="font-bold text-4xl">There was an error...</h4>
  )
}

export default ErrorElement