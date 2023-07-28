import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LoginForm } from '@/components/LoginForm';
import { Card } from '@/components/ui/card';
import { SignupForm } from '@/components/SignupForm';
import { Separator } from '@/components/ui/separator';
import GoogleAuth from '@/components/GoogleAuth';

interface pageProps {
    params: {
        slug: string;
    };
}

const page: FC<pageProps> = ({ params }) => {
    const defaultTab = params.slug === 'signup' ? 'signup' : 'login';
    return (
        <div className="flex items-center justify-center pt-20">
            <Card>
                <Tabs
                    defaultValue={`${defaultTab}`}
                    className="rounded-md w-96 p-5"
                >
                    <TabsList>
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <LoginForm />
                        <Separator className="my-5" />
                        <div className="flex justify-center">
                            <GoogleAuth />
                        </div>
                    </TabsContent>
                    <TabsContent value="signup">
                        <SignupForm />
                        <Separator className="my-5" />
                        <div className="flex justify-center">
                            <GoogleAuth />
                        </div>
                    </TabsContent>
                </Tabs>
            </Card>
        </div>
    );
};

export default page;
