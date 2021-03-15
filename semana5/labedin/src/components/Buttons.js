import React from 'react'
import { Button } from '@material-ui/core'
import {
  AddCircle,
  Facebook,
  Twitter }
  from '@material-ui/icons'

export const ButtonAdd = props => 
  <Button variant='contained' startIcon={<AddCircle />} >
    {props.texto}
  </Button>

export const ButtonFace = props =>
  <Button variant='contained' startIcon={<Facebook />} >
    {props.texto}
  </Button>

export const ButtonTwitter = props =>
  <Button variant='contained' startIcon={<Twitter />} >
    {props.texto}
  </Button>