import { CollectionConfig } from "payload";

const Products: CollectionConfig = {
  slug: "products",
  access: {
  read: () => true,
},
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default Products;
