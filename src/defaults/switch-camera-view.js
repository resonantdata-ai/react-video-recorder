import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'

const MediaControlsWrapper = styled.div`
  top: 0px;
  right: 0px;
  z-index: 10;
  padding-left: 8px;
  padding-top: 0px;
  position: absolute;
  cursor: pointer;
  display: flex;
  padding: 20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
`

const SelectWrapper = styled.div`
  display: inline-block;
  margin: 0 20px;
`

const SelectLabel = styled.div`
  font-family: Arial;
  font-size: 14px;
  margin-bottom: 5px;
`

const SwitchCameraView = (selectProps) => (
  <MediaControlsWrapper>
    <SelectWrapper>
      <SelectLabel>Select your Camera</SelectLabel>
      <Select
        name='vselector'
        // eslint-disable-next-line react/jsx-handler-names
        onChange={selectProps.onChangeVideo}
        options={selectProps.optionsVideo}
        defaultValue={selectProps.optionsVideo.find(
          ({ value }) => value === selectProps.valueVideo
        )}
        styles={{
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: 'black',
            fontFamily: 'Arial',
            fontSize: '10px'
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            color: 'black',
            fontFamily: 'Arial',
            fontSize: '10px',
            width: '200px'
          })
        }}
      />
    </SelectWrapper>

    <SelectWrapper>
      <SelectLabel>Select your Microphone</SelectLabel>
      <Select
        name='aselector'
        // eslint-disable-next-line react/jsx-handler-names
        onChange={selectProps.onChangeAudio}
        options={selectProps.optionsAudio}
        defaultValue={selectProps.optionsAudio.find(
          ({ value }) => value === selectProps.valueAudio
        )}
        styles={{
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: 'black',
            fontFamily: 'Arial',
            fontSize: '10px'
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            color: 'black',
            fontFamily: 'Arial',
            fontSize: '10px',
            width: '200px'
          })
        }}
      />
    </SelectWrapper>
  </MediaControlsWrapper>
)

export default SwitchCameraView
