"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Denied: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center h-[90vh] bg-dark-black">
      <Card className="max-w-md w-full p-6 bg-dark-black shadow-2xl shadow-dark-red rounded-lg">
        <CardHeader>
          <h1 className="text-center text-3xl text-red-600">
            Access Denied
          </h1>
        </CardHeader>
        <CardContent className="text-center">
          <h1 className="mb-4 text-dark-white">
            You do not have the necessary permissions to access this page. Please log in with the appropriate credentials.
          </h1>
          <Button variant={"destructive"} onClick={handleLogin}>
            Go to Login
          </Button>
        </CardContent>
        <CardFooter className="text-center text-dark-white">
          <h2>
            If you believe this is a mistake, please contact support.
          </h2>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Denied;
