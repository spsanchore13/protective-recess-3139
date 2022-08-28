import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import ProductSection from "./ProductSection";
// import SideNavigation from "./SideNavigation";
import axios from "axios";
import { useEffect, useState } from "react";

function getData() {
  return axios.get(
    `https://pratappura-server.herokuapp.com/products?_limit=100`
  );
}

function ProductPage() {
  const [product, setProduct] = useState([]);
  // console.log(product);
  useEffect(() => {
    getData().then((res) => {
      setProduct(res.data);
    });
  }, []);

  // console.log(product);

  return (
    <>
      <Breadcrumb fontWeight="medium" fontSize="sm" p={5}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/product">Product</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <ProductSection product={product} />
    </>
  );
}

export default ProductPage;
