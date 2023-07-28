'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { useToast } from '@/components/ui/use-toast';
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
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Min length 2',
    }),
    email: z.string().email({
        message: 'Email format incorrect',
    }),
    password: z.string().min(5, {
        message: 'Password must be min 5',
    }),
});

export function SignupForm() {
    // Loading State
    const [loading, setLoading] = useState<boolean>(false);

    // Toast hook
    const { toast } = useToast();

    // Submit Button
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/signup`,
            { method: 'POST', body: JSON.stringify(values) }
        );
        // const result = response.json();
        // console.log(result);
        toast({
            description: 'Signup Successful',
        });
        setLoading(false);
    }

    // Useform Hook
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    // Component
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Full Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                        <Button type="submit">Sign Up</Button>
                    )}
                </div>
            </form>
        </Form>
    );
}
