import { Head, Link, usePage, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Button, buttonVariants } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Megaphone } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

declare function route(name: string, params?: any): string;

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export default function Index() {
    const { products, flash } = usePage().props as any;
    const { processing, delete: destroy } = useForm();

    const handleDelete = (id: number, name: string) => {
        if (confirm(`Do you want to delete a product - ${id}.${name}?`)) {
            destroy(route('products.destroy', id), {
                preserveScroll: true,
            });
        }   
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            
            <div className="m-4">
                <Link href={route('products.create')}>
                    <Button>Create a Product</Button>
                </Link>
            </div>

            <div className="m-4">
                {flash?.message && (
                    <Alert className="bg-white text-black border-none shadow-md">
                        <Megaphone className="h-4 w-4 text-black" />
                        <AlertTitle className="font-bold text-black">Notification!</AlertTitle>
                        <AlertDescription className="text-black">
                            {flash.message}
                        </AlertDescription>
                    </Alert>
                )}
            </div>

            {products && products.length > 0 && (
                <div className='m-4 border rounded-md shadow-sm'> 
                    <Table>
                        <TableCaption>A list of your recent products.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead className='text-center'>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product: Product) => (
                                <TableRow key={product.id}>
                                   <TableCell className="font-medium">{product.id}</TableCell>
                                   <TableCell>{product.name}</TableCell>
                                   <TableCell>{product.price}</TableCell>
                                   <TableCell>{product.description}</TableCell>
                                   <TableCell className="text-center space-x-2">
                                        <Link 
                                            href={route('products.edit', product.id)}
                                            className={buttonVariants({ variant: "outline", size: "sm" }) + " bg-slate-600 text-white hover:bg-slate-700"}
                                        >
                                            Edit
                                        </Link>
                                        <Button 
                                            disabled={processing} 
                                            onClick={() => handleDelete(product.id, product.name)} 
                                            variant="destructive"
                                            size="sm"
                                        >
                                            {processing ? 'Deleting...' : 'Delete'}
                                        </Button>
                                   </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </AppLayout>
    );
}