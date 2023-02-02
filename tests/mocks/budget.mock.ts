const validBody = [1,2,3];
const validId = 1;
const invalidBody = [1,2,'a'];
const invalidIdBody = [1,2,20000000];
const invalidId = 10000000000;
const budgetMock = { budget: 11348.35 };

const selectedProducts = [
  {
    id: 1,
    name: "explicabo alias hic reprehenderit deleniti quos id reprehenderit consequuntur ipsam iure voluptatem ea culpa excepturi ducimus repudiandae ab",
    price: 6945
  },
  {
    id: 2,
    name: "nostrum veritatis reprehenderit repellendus vel numquam soluta ex inventore ex",
    price: 2435
  },
  {
    id: 3,
    name: "praesentium explicabo reprehenderit laudantium a pariatur ab sit pariatur quos",
    price: 4985
  },
]

export {
  validBody,
  validId,
  invalidBody,
  invalidIdBody,
  invalidId,
  budgetMock,
  selectedProducts,
};
