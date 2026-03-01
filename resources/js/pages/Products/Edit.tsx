import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { AlertDescription, Alert, AlertTitle } from '@/components/ui/alert';
import { CircleAlert } from 'lucide-react';

declare function route(name: string, params?: any): string;

interface Product {
    id: number;
    name: string;
    description: string;
    price: number | string;
}

interface Props {
    product: Product;
}

export default function Edit({ product }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: product?.name || '',
        price: product?.price || '',
        description: product?.description || '',
    });

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault(); 
        put(route('products.update', product.id));
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'Edit Product', href: `/products/${product.id}/edit` }]}>
            <Head title="Update Product" />

            <div className="max-w-2xl p-4 md:p-8">
                <form onSubmit={handleUpdate} className="space-y-4">
                    
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
                        />
                        {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                    </div>

                    <div className="grid gap-1.5">
                        <Label htmlFor="product-price">Price</Label>
                        <Input
                            id="product-price"
                            type="number"
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                        />
                        {errors.price && <div className="text-red-500 text-sm">{errors.price}</div>}
                    </div>

                    <div className="grid gap-1.5">
                        <Label htmlFor="product-description">Description</Label>
                        <Textarea
                            id="product-description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                        />
                        {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
                    </div>
                    
                    <Button type="submit" disabled={processing}>
                        {processing ? 'Updating...' : 'Update Product'}
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
}