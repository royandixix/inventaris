import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { AlertDescription, Alert, AlertTitle } from '@/components/ui/alert';
import { CircleAlert } from 'lucide-react';

declare function route(name: string, params?: any): string;

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a New Product',
        href: '/products/create',
    },
];

export default function Index() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        price: '',
        description: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        post(route('products.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a New Product" />

            <div className="max-w-2xl p-4 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Perbaikan: Jangan pakai Object.entries di sini jika bikin blank */}
                    {Object.keys(errors).length > 0 && (
                        <Alert variant="destructive">
                            <CircleAlert className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                Please check your input again.
                            </AlertDescription>
                        </Alert>
                    )}

                    <div className="grid gap-1.5">
                        <Label htmlFor="product-name">Name</Label>
                        <Input
                            id="product-name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Product Name"
                        />
                        {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                    </div>

                    <div className="grid gap-1.5">
                        <Label htmlFor="product-price">Price</Label>
                        <Input
                            id="product-price"
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            placeholder="Price"
                        />
                        {errors.price && <div className="text-red-500 text-sm">{errors.price}</div>}
                    </div>

                    <div className="grid gap-1.5">
                        <Label htmlFor="product-description">Description</Label>
                        <Textarea
                            id="product-description"
                            placeholder="Description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                        />
                        {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
                    </div>
                    
                    <Button type="submit" disabled={processing}>Add Product</Button>
                </form>
            </div>
        </AppLayout>
    );
}