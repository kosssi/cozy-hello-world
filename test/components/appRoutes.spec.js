'use strict'

/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import AppRoutes from '../../src/components/AppRoutes'

describe('AppRoutes component', () => {
  it('should be rendered correctly', () => {
    const component = shallow(
      <AppRoutes />
    ).node
    expect(component).toMatchSnapshot()
  })
})
