import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  SimpleGrid,
} from "@chakra-ui/react";
import ProductSection from "./ProductSection";
import SideNavigation from "./SideNavigation";

function ProductPage() {
  return (
    <>
      <Breadcrumb fontWeight="medium" fontSize="sm">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Current</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <ProductSection />
    </>
  );
}

export default ProductPage;
