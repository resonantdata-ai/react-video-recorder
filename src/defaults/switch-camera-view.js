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
  padding: 15px 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
`

const SelectWrapper = styled.div`
  display: inline-block;
  margin: 0 5px;
`

const SelectLabel = styled.div`
  font-family: Arial;
  font-size: 12px;
  margin-bottom: 5px;
`

const SwitchCameraView = (selectProps) => (
  <MediaControlsWrapper>
    <SelectWrapper>
      <SelectLabel>Select your Camera</SelectLabel>
      <Select
        name='vselector'
        className='device-select-container'
        classNamePrefix='device-select'
        // eslint-disable-next-line react/jsx-handler-names
        onChange={selectProps.onChangeVideo}
        options={selectProps.optionsVideo}
        defaultValue={selectProps.optionsVideo.find(
          ({ value }) => value === selectProps.valueVideo
        )}
        theme={(theme) => ({
          ...theme,
          spacing: {
            ...theme.spacing,
            controlHeight: 20,
            baseUnit: 0
          }
        })}
        styles={{
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: 'black',
            fontFamily: 'Arial',
            fontSize: '10px',
            padding: 10
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            color: 'black',
            fontFamily: 'Arial',
            fontSize: '10px',
            width: 160,
            minHeight: 20,
            paddingLeft: 10
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
        theme={(theme) => ({
          ...theme,
          spacing: {
            ...theme.spacing,
            controlHeight: 20,
            baseUnit: 0
          }
        })}
        styles={{
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: 'black',
            fontFamily: 'Arial',
            fontSize: '10px',
            padding: 10
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            color: 'black',
            fontFamily: 'Arial',
            fontSize: '10px',
            width: 160,
            minHeight: 20,
            paddingLeft: 10
          })
        }}
      />
    </SelectWrapper>
  </MediaControlsWrapper>
)

export default SwitchCameraView
