'use client';
import * as React from 'react';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { useToast } from './ui/use-toast';

const formSchema = z.object({
    title: z.string().min(2, {
        message: 'Title must be at least 2 characters.',
    }),
    description: z.string().min(2, {
        message: 'Description must be at least 2 characters.',
    }),
    price: z.coerce
        .number()
        .gt(0, { message: 'Price should be greater than 0' }),
    category: z.string({
        required_error: 'Please select a Category.',
    }),
    gender: z.string({
        required_error: 'Please select a Gender.',
    }),
    image: z.string().min(2, {
        message: 'Image must be at least 2 characters.',
    }),
    stock: z.number().min(2, {
        message: 'Stock must be at least 2 characters.',
    }),
});
export type formSchema = z.infer<typeof formSchema>;
export function AddProduct() {
    const [loading, setLoading] = React.useState<boolean>(false);
    const { toast } = useToast();

    const form = useForm<formSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            description: '',
            price: 0,
            category: 'clothing',
            gender: 'male',
            image: '/assets/hero.png',
            stock: 100,
        },
    });
    async function onSubmit(values: formSchema) {
        setLoading(true);
        const { title, description, category, gender, image, stock, price } =
            values;
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/addProduct`,
            {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    description,
                    price,
                    category,
                    gender,
                    image,
                    stock,
                }),
            }
        );
        const result = await response.json();
        form.reset({
            title: '',
            description: '',
            price: 0,
        });
        toast({
            description: 'Product Created',
        });
        setLoading(false);
    }

    return (
        <Card className="w-96 mt-20">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardHeader>
                        <CardTitle>Add Product</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-3">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Men Tee"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Add something about tees"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Price"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Select Category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="clothing">
                                                        Clothing
                                                    </SelectItem>
                                                    <SelectItem value="jewellery">
                                                        Jewellery
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Gender</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Select Category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="male">
                                                        Male
                                                    </SelectItem>
                                                    <SelectItem value="female">
                                                        Female
                                                    </SelectItem>
                                                    <SelectItem value="unisex">
                                                        Unisex
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="stock"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Stock</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Stock"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        {loading ? (
                            <Button disabled>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button>
                        ) : (
                            <Button type="submit">Submit</Button>
                        )}
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
}
