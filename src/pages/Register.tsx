import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, User, Lock } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual register logic
    navigate('/'); // Navigate to home after registration
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="hidden md:flex flex-col justify-center space-y-6 p-8">
          <h1 className="text-4xl font-bold text-gray-800">Join Our Community</h1>
          <p className="text-lg text-gray-600">
            Create your account and start your journey with us. Get access to exclusive features and content.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Secure and reliable platform</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">24/7 customer support</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Easy to use interface</span>
            </div>
          </div>
        </div>
        <Card className="w-full shadow-xl border-0">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
            <p className="text-sm text-gray-500">Enter your details to get started</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="h-10 pl-10"
                    required 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="name@example.com" 
                    className="h-10 pl-10"
                    required 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    placeholder="Create a password" 
                    className="h-10 pl-10 pr-10"
                    required 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    type={showConfirmPassword ? "text" : "password"} 
                    id="confirmPassword" 
                    placeholder="Confirm your password" 
                    className="h-10 pl-10 pr-10"
                    required 
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{' '}
                  <Button 
                    variant="link" 
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto"
                    onClick={() => {/* TODO: Show terms and conditions */}}
                  >
                    Terms and Conditions
                  </Button>
                </Label>
              </div>
              <Button type="submit" className="w-full h-10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                Create Account
              </Button>
            </form>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-10">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="h-10">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12c0 5.623 3.872 10.328 9.092 11.63a.751.751 0 01-.182.37c-.203.203-.54.396-.94.53-.64.234-1.524.628-2.502.628-1.11 0-1.933-.932-1.933-2.064 0-.96.64-1.86.64-1.86s-1.92-.64-1.92-3.2c0-2.24 1.28-3.84 1.28-3.84s-.64-1.28.64-1.28c1.28 0 1.92 1.28 1.92 1.28 1.28 0 2.24-1.28 3.84-1.28 1.6 0 2.56.64 2.56.64s.64-1.28 1.92-1.28c1.28 0 1.92 1.28 1.92 1.28 1.28 0 2.24-1.28 3.84-1.28 1.6 0 2.56.64 2.56.64s-.64 1.28.64 1.28c1.28 0 1.92-1.28 1.92-1.28 0 2.24-1.92 3.2-1.92 3.2s.64.9.64 1.86c0 1.132-.823 2.064-1.933 2.064-.978 0-1.862-.394-2.502-.628-.4-.134-.737-.327-.94-.53a.751.751 0 01-.182-.37C20.128 22.328 24 17.623 24 12c0-6.627-5.373-12-12-12z"
                    fill="#24292E"
                  />
                </svg>
                GitHub
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Button 
                variant="link" 
                className="text-blue-600 hover:text-blue-800 p-0 h-auto"
                onClick={() => navigate('/login')}
              >
                Sign in
              </Button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
