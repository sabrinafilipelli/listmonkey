import { useState, useEffect } from 'react'

function useFormValidation(initialState, validate, authenticate) {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        authenticate()
        setSubmitting(false)
      } else {
        setSubmitting(false)
      }
    }
  }, [authenticate, errors, isSubmitting, values])

  function handleChange(event) {
    event.persist()
    setValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value
    }))
    console.log(values)
  }

  function handleAssignClick(member) {
    if (values.assigned.includes(member)) {
      var index = values.assigned.indexOf(member)
      values.assigned.splice(index, 1)
    } else {
      setValues(previousValues => ({
        ...previousValues,
        ["assigned"]: [...previousValues.assigned, member]
      }))
    }
  }

  function handleBlur() {
    const validationErrors = validate(values)
    setErrors(validationErrors)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)
  }

  return {
    handleSubmit,
    handleBlur,
    handleAssignClick,
    handleChange,
    values,
    errors,
    isSubmitting
  }
}

export default useFormValidation
