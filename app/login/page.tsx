import Navbar from '@/components/layout/Navbar'

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-primary-light">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary-black">Login</h1>
            <p className="mt-2 text-gray-600">Sign in to your account</p>
          </div>
          {/* Login form content will go here */}
        </div>
      </div>
    </>
  )
}