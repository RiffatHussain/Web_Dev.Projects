import { useState } from 'react';
import { FaTwitter, FaFacebook, FaGoogle } from 'react-icons/fa';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the form submission, 
    // such as sending data to a server for authentication.
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm bg-cover bg-center" style={{ backgroundImage : "url('/public/image/abstract-gradient-neon-lights.jpg')"}}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className=' bg-cover bg-center'>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder='Enter username'
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 hover:bg-slate-100 bg-white text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder='Enter password'
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 hover:bg-slate-100 bg-white text-gray-700"
            />
            <p className='text-end'><a className='hover:cursor-pointer'>Forget password</a></p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>

          <p className='text-center mt-4'>Or Sign up Using</p>
         
          <div className="flex justify-center mt-4 gap-4"> 
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> 
                <FaTwitter className="text-blue-500" size="2em" /> 
              </a> 
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> 
                <FaFacebook className="text-blue-600" size="2em" /> 
              </a> 
              <a href="https://google.com" target="_blank" rel="noopener noreferrer"> 
                <FaGoogle className="text-red-500" size="2em" /> 
              </a> 
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;