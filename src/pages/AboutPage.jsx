import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/content'
import { Image } from 'react-bootstrap';
import avatar from '../assets/images/avatar.png'

function AboutPage(props) {
  return (
    <div style={{ height: '100vh' }}>
      <div className="d-flex justify-content-around align-items-center" style={{ display: 'contents' }}>
        <Hero title={props.title} />
        <Image src={avatar} roundedCircle className="avatar" />
      </div>
      <Content>
        <h3 className="font-weight-ligth">Hello, my name is Alex. I'm a full stack engineer with exh4erience in Ruby, Ruby on Rails, JavaScript, React JS, MySQL, PostgresSql</h3>
        <hr/>
        <p></p>
        <h3 className="font-weight-ligth">I'm constantly learning new things. currently those things include gaining more experience with React, Express JS, and Node JS</h3>
        <br/>
        <h3 className="font-weight-ligth">My latest project, Qui a bete, is a betting site for friends, family,... You can check it out <a href="https://quiabete.co" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with Rubyon Rail, PostGresSql and some JavaScript.</h3>
        <br/>
        <p></p>
      </Content>
    </div>
  )
}

export default AboutPage;
