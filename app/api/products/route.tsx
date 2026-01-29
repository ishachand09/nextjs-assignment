import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data/products.json');

export async function GET() {
    try {
        if (!fs.existsSync(dataFilePath)) {
            return NextResponse.json([], { status: 200 });
        }
        const fileContent = fs.readFileSync(dataFilePath, 'utf8');
        const products = JSON.parse(fileContent);
        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, description, price, category, imageUrl } = body;

        // Basic validation
        if (!title || !description || !price || !category || !imageUrl) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        let products = [];
        if (fs.existsSync(dataFilePath)) {
            const fileContent = fs.readFileSync(dataFilePath, 'utf8');
            try {
                products = JSON.parse(fileContent);
            } catch (e) {
                // If file is empty or invalid JSON, start with empty array
                products = [];
            }
        }

        const newProduct = {
            id: Date.now().toString(),
            title,
            description,
            price: parseFloat(price),
            category,
            imageUrl,
            createdAt: new Date().toISOString(),
        };

        products.push(newProduct);

        fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2));

        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save product' }, { status: 500 });
    }
}
