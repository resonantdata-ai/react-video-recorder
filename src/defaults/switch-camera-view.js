import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'

const SVGWrapper = styled.div`
  width: 250px;
  height: 80px;
  top: 40px;
  right: 40px;
  z-index: 10;
  padding-left: 8px;
  padding-top: 10px;
  position: absolute;
  cursor: pointer;
`

const SwitchCameraView = (selectProps) => (
  <SVGWrapper>
    <Select
      name='vselector'
      // eslint-disable-next-line react/jsx-handler-names
      onChange={selectProps.onChange}
      options={selectProps.options}
      defaultValue={selectProps.options.find(
        ({ value }) => value === selectProps.value
      )}
      styles={{
        option: (baseStyles, state) => ({
          ...baseStyles,
          color: 'black'
        })
      }}
    />
  </SVGWrapper>
)

export default SwitchCameraView
