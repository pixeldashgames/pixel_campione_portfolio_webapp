import {Project} from './project'

export const projectSeed: Project[] = [{
  id: 1,
  name: 'Project 1',
  description: 'This is a project',
  detailedDescription: 'This is a detailed description',
  img: "/test.png",
  techStack: [{
    id: 1,
    name: 'google',
    referenceURL: 'https://www.google.com/',
    image: '/google.png'
  }, {
    id: 2,
    name: 'google',
    referenceURL: 'https://www.google.com/',
    image: '/google.png'
  }, {
    id: 3,
    name: 'google',
    referenceURL: 'https://www.google.com/',
    image: '/nestjs.png'
  }, {
    id: 1,
    name: 'google',
    referenceURL: 'https://www.google.com/',
    image: '/google.png'
  }, {
    id: 2,
    name: 'google',
    referenceURL: 'https://www.google.com/',
    image: '/google.png'
  }, {
    id: 3,
    name: 'google',
    referenceURL: 'https://www.google.com/',
    image: '/google.png'
  }, {
    id: 1,
    name: 'google',
    referenceURL: 'https://www.google.com/',
    image: '/google.png'
  }, {
    id: 2,
    name: 'google',
    referenceURL: 'https://www.google.com/',
    image: '/google.png'
  }, {
    id: 3,
    name: 'google',
    referenceURL: 'https://www.google.com/',
    image: '/google.png'
  }],
}, {
  id: 2,
  name: 'Project 2',
  description: 'This is another project',
  detailedDescription: 'This is another detailed description',
  img: "/test.png",
  techStack: [{
    id: 1,
    name: 'google',
    referenceURL: 'google.com',
    image: '/google.png'
  }, {
    id: 2,
    name: 'google',
    referenceURL: 'google.com',
    image: '/google.png'
  }, {
    id: 3,
    name: 'google',
    referenceURL: 'google.com',
    image: '/google.png'
  }],
}]; 