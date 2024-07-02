import React,{useState,useRef} from 'react';
import emailjs from '@emailjs/browser';

import {
  Button,
  Form,
  Input,
} from 'antd';
const { TextArea } = Input;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

    const [form]=Form.useForm()
    
  const sendEmail = (formdata) => {

    setIsSubmitting(true);
    emailjs
    .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formdata, {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    })
    .then(
      () => {
        setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); 
      },
      (error) => {
        setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
      },
    );
    
    form.resetFields();

  };


  return (
    <div className='w-10/12 m-auto my-8' id="contact">
    <h2 className='text-center font-semibold text-2xl lg:text-4xl my-12'>Contact Me</h2>

<div className='w-full flex justify-center ' >
<Form
        name="contact_form"
        layout="vertical"
        className='w-8/12 !text-2xl'
        onFinish={sendEmail}
        form={form}

      >
        
        <Form.Item label={<label className='text-lg text-white font-medium'>Full name :</label>} 
        name='name'
        rules={[
          {
            required: true,
            message: 'Please input your name',
            whitespace: false,
          },
        ]}
        >
          <Input placeholder='Enter your name' allowClear/>
        </Form.Item>
        <Form.Item 
        label={<label className='text-lg text-white font-medium'>Email :</label>} 
        name='email'
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
        >
          <Input placeholder='Enter email id' allowClear/>
        </Form.Item>
        <Form.Item label={<label className='text-lg text-white font-medium'>Subject :</label>} 
        name='subject'
        rules={[
          {
            required: true,
            message: 'Subject is required',
            whitespace: true,
          },
        ]}
        >
          <Input placeholder='Enter Subject' allowClear/>
        </Form.Item>
        <Form.Item label={<label className='text-lg text-white font-medium'>Message :</label>} name='message'>
          <TextArea rows={4} showCount maxLength={250} allowClear placeholder='Enter your message'/>
        </Form.Item>
          <Button 
          htmlType='submit' 
          type='primary' 
          className='font-medium bg-green-500 text-white rounded my-2 border-none hover:!bg-green-700'
          disabled={isSubmitting}
          >Send Message</Button>
           {stateMessage && <p className='text-white'>{stateMessage}</p>}
      </Form>
      </div>

    </div>
  )
}

export default Contact
