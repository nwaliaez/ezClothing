'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

import { signIn } from 'next-auth/react';

import { useToast } from './ui/use-toast';
import { useState } from 'react';

import { Loader2 } from 'lucide-react';

const formSchema = z.object({
    email: z.string().email({
        message: 'Email format incorrect',
    }),
    password: z.string().min(5, {
        message: 'Password must be min 5',
    }),
});

export function LoginForm() {
    const [loading, setLoading] = useState<boolean>(false);

    const { toast } = useToast();
    // const router = useRouter();

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
        const { email, password } = values;
        const response = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });
        console.log(response);
        if (response?.error == 'CredentialsSignin') {
            toast({
                variant: 'destructive',
                description: 'User not found',
            });
        } else {
            toast({
                description: 'Login successful',
            });

            window.location.href = response?.url || '/';
            // router.push(response?.url || '/');
        }
        setLoading(false);
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end">
                    {loading ? (
                        <Button disabled>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </Button>
                    ) : (
                        <Button type="submit">Login</Button>
                    )}
                </div>
            </form>
        </Form>
    );
}
