import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Posts, { loader as postsLoader } from './routes/Posts'
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails';
import './index.css'
import NewPost, { action as submitAction } from './routes/NewPost';
import RootLayout from './routes/RootLayout';


const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />, 
    children: [
      { 
        path: '/', 
        element: <Posts />, 
        loader: postsLoader,
        children: [
          { path: '/create', element: <NewPost />, action: submitAction },
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader }
        ]
      },
    ] 
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
