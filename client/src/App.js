import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios"


function TextControlsExample() {
  const [email,setEmail]=useState("")
  const [subject,setSubject]=useState("")
  const [text,setText]=useState("")
  const sendmail=()=>{
    axios.post("http://localhost:5000/api/sendmail",{
      email:email,
      subject:subject,
      msg:text

    }).then((res)=>{console.log(res.data)})

  }
  const sendSMS=()=>{
    axios.post("http://localhost:5000/api/sendSms",{
      msg: email
    }).then((res)=>console.log(res.data))
  }
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>subject</Form.Label>
        <Form.Control type="text" placeholder="subject" onChange={(e)=>setSubject(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e)=>setText(e.target.value)} />
      </Form.Group>
      

    </Form>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>msg</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
    </Form>
    <button onClick={()=>sendSMS()}>sendSMS</button>
    <button onClick={()=>sendmail()}>send</button></>
  );
}

export default TextControlsExample;