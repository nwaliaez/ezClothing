import { formSchema } from '@/components/AddProduct';
import { db } from '@/db';
import { products } from '@/db/schema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { title, description, category, gender, image, stock }: formSchema =
        await req.json();
    const response = await db
        .insert(products)
        .values({
            productTitle: title,
            productDescription: description,
            category,
            gender,
            imageUrl: image,
            stock: stock,
        })
        .returning();
    console.log(response);

    return NextResponse.json({ status: 'success' });
}
