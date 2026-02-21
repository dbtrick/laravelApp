import { Head, Link } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div >
                <Link  href={route('products.create')}> 
                    <Button>
                        Create a product
                    </Button>
                </Link>
            </div>
        </AppLayout>
    );
}
