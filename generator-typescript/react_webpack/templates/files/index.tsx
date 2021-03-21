import * as React from 'react';
import { render } from 'react-dom';

import { Hello } from './Hello.tsx';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Hello compiler='typescript' framework='react'/>,
    document.getElementById('main')
  )
})
