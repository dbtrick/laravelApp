import { Head, Link, usePage } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle, } from '@/components/ui/alert';
import { Bell } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

interface PageProps{
    flash: {
        message?: string
    }
}

export default function Index() {

    const {flash} = usePage().props as PageProps;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className='m-4'>
                <Link  href={route('products.create')}> 
                    <Button>
                        Create a Product
                    </Button>
                </Link>
            </div>
            <div className='m-4'>
                {flash.message && (
                    <Alert>
                    <Bell className='h-4 w-4' />
                    <AlertTitle>Notification!</AlertTitle>
                    <AlertDescription>
                       {flash.message}
                    </AlertDescription>
                </Alert>
                )}
            </div>
        </AppLayout>
    );
}
