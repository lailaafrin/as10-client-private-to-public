import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './Provider/AuthProvider'
import myRouts from './Routs/Rout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myRouts} />
    </AuthProvider>
  </React.StrictMode>,
)
// const brandProducts = await productCollection.find({brand: req.params.brand}).toArray();
// / product / brandProducts /: brand

// https://github.com/foy4748/thrift-phones/blob/main/src/Routes/PrivateRoute.jsx
// Programming - Hero Instructors1:06 PM
// আপনি প্রতিটা product এ brand_name রাখবেন..আর সবগুলা brand_name একটা collection এ রাখবেন... 

// প্রথমে সবগুলি brand_name fetch করবেন db থেকে... তারপর সেগুলার নাম use করে React Route বানাবেন..brand এর নাম useParams দিয়ে নিয়ে ঐ brand এর নাম db এ সার্চ করে product আনবেন

// যতটা সম্ভব database use করেন... MongoDB এর website বা Mongo Compass এ গিয়ে Add Document করে brand এর নামের collection তৈরি করতে পারেন, তাহলে json দরকার হবে না
