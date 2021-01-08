import React, { useCallback, useRef, useState } from 'react'
import { Button, Upload } from 'antd'
import { CheckOutlined, PlusOutlined } from '@ant-design/icons'
import { Cropper } from 'react-perspective-cropper'

import './App.css'
import Header from './components/Header'

const { Dragger } = Upload

const App = () => {
  const [cropState, setCropState] = useState()
  const [img, setImg] = useState()
  const [inputKey, setInputKey] = useState(0)
  const cropperRef = useRef()

  const onDragStop = useCallback((s) => setCropState(s), [])
  const onChange = useCallback((s) => setCropState(s), [])

  const doSomething = async () => {
    console.log(cropState)
    try {
      const res = await cropperRef.current.done({ preview: true })
      console.log(res)
    } catch (e) {
      console.log('error', e)
    }
  }

  const onImgSelection = async (e) => {
    console.log(e)
    if (e.fileList && e.fileList.length > 0) {
      // it can also be a http or base64 string for example
      setImg(e.fileList[0].originFileObj)
    }
  }

  const draggerProps = {
    name: 'file',
    multiple: false,
    onChange: onImgSelection
  }

  return (
    <div className='root-container'>
      <Header />
      <div className='content-container'>
        {cropperRef?.current && img && (
          <div className='buttons-container'>
            <Button onClick={doSomething} icon={<CheckOutlined />}>
              Done
            </Button>
            <Button
              onClick={() => {
                cropperRef.current.backToCrop()
              }}
            >
              Back
            </Button>
            <Button
              onClick={() => {
                setImg(undefined)
                setInputKey((i) => i + 1)
              }}
            >
              Reset
            </Button>
          </div>
        )}
        <Cropper
          ref={cropperRef}
          image={img}
          onChange={onChange}
          onDragStop={onDragStop}
        />
        {!img && (
          <Dragger {...draggerProps}>
            <p>
              <PlusOutlined />
            </p>
            <p>Upload</p>
          </Dragger>
        )}
      </div>
    </div>
  )
}

export default App
