import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const { TextArea } = Input;

const Contact = () => {
    const  handleFormSubmit = (values) => {
        console.log(values);
    };
  return (
    <div className='w-10/12 m-auto py-8'>
    <h2 className='text-center font-semibold text-2xl lg:text-4xl my-16'>Contact Me</h2>





<div className='w-full flex justify-center '>

<Form
        name="contact_form"
        layout="vertical"
        className='w-8/12 !text-2xl'
        onFinish={handleFormSubmit}
      >
        
        <Form.Item label={<label className='text-lg text-white font-medium'>Full name :</label>} name='name'>
          <Input placeholder='Enter your name'/>
        </Form.Item>
        <Form.Item label={<label className='text-lg text-white font-medium'>Email :</label>} name='email'>
          <Input placeholder='Enter email id'/>
        </Form.Item>
        <Form.Item label={<label className='text-lg text-white font-medium'>Subject :</label>} name='subject'>
          <Input placeholder='Enter Subject'/>
        </Form.Item>
        

        <Form.Item label={<label className='text-lg text-white font-medium'>Message :</label>} name='message'>
          <TextArea rows={4} placeholder='Enter your message'/>
        </Form.Item>
        

          <Button htmlType='submit' type='primary' className='font-medium bg-green-500 text-white rounded my-2 border-none hover:!bg-green-700'>Send Message</Button>

        
      </Form>

      </div>







    </div>
  )
}

export default Contact
