import React from "react";
import Head from "next/head";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";

const BreadcrumbCart = () => {
  const router = useRouter();
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Cart", href: router.pathname },
  ];

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": breadcrumb.name,
              "item": `${process.env.NEXT_PUBLIC_BASE_URL}${breadcrumb.href}`,
            })),
          })}
        </script>
      </Head>
      <Breadcrumb className="mb-2 sm:mb-6">
        <BreadcrumbList>
          {breadcrumbs.map((breadcrumb, index) => (
            <BreadcrumbItem key={index}>
              {index < breadcrumbs.length - 1 ? (
                <BreadcrumbLink asChild>
                  <Link href={breadcrumb.href}>{breadcrumb.name}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{breadcrumb.name}</BreadcrumbPage>
              )}
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbCart;
