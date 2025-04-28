import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    navigate('/'); // Navigate to home after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-4xl font-bold">Welcome Back</CardTitle>
          <p className="text-lg text-gray-500">Enter your credentials to access your account</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-lg">Email</Label>
              <Input 
                type="email" 
                id="email" 
                placeholder="name@example.com" 
                className="h-12 text-lg"
                required 
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-lg">Password</Label>
                <Button 
                  variant="link" 
                  className="text-sm text-blue-600 hover:text-blue-800 p-0 h-auto"
                  onClick={() => {/* TODO: Implement forgot password */}}
                >
                  Forgot password?
                </Button>
              </div>
              <Input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                className="h-12 text-lg"
                required 
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="h-5 w-5" />
              <Label htmlFor="remember" className="text-lg">Remember me</Label>
            </div>
            <Button type="submit" className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700">
              Sign In
            </Button>
          </form>
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-sm uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-12 text-lg">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
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
            <Button variant="outline" className="h-12 text-lg">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
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
          <p className="text-lg text-gray-600">
            Don't have an account?{' '}
            <Button 
              variant="link" 
              className="text-blue-600 hover:text-blue-800 p-0 h-auto text-lg"
              onClick={() => navigate('/register')}
            >
              Sign up
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
