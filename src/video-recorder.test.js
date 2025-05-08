import React from 'react'
import Enzyme from 'enzyme'
import VideoRecorder from './video-recorder'

describe('VideoRecorder', () => {
  it('renders without crashing', () => {
    Enzyme.shallow(<VideoRecorder />)
  })
})
