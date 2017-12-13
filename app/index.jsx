'use strict'

import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './components/Root'


render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('main')
)
