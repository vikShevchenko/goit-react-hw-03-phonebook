import PropTypes from 'prop-types'
import React from 'react'
import {Wripper, FiltetTitle, Input} from './Filter.styled'


export default function Filter({onChange, value}) {
  
  return (
    <Wripper>
      <FiltetTitle>Find contacts by name</FiltetTitle>
        <Input
        onChange={onChange}
        value={value}
        name='form'
        type='text' 
        >
        </Input>
    </Wripper>
  )
}
Filter.propTypes ={
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

