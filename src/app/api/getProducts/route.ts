import { db } from '@/db';
import { products } from '@/db/schema';
import { eq, or } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { gender } = await req.json();
    const data = await db
        .select()
        .from(products)
        .where(or(eq(products.gender, gender), eq(products.gender, 'unisex')));
    return NextResponse.json({ status: 'success', data: data });
}
