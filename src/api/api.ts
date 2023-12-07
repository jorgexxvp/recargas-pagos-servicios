import axios from 'axios';

export const api = axios.create({
  baseURL: "https://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com",
  headers: {
     Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI"
  }
})

