import { db } from "../src/utils/db.server";

async function seed() {
  await db.products.deleteMany({});
  await db.categories.deleteMany({});
  await db.departments.deleteMany({});

  await Promise.all(
    getDepartments().map((department) => {
      return db.departments.create({
        data: {
          id: department.id,
          label: department.label,
          image: department.image,
          department: department.department,
        },
      });
    })
  );

  await Promise.all(
    getCategories().map((category) => {
      return db.categories.create({
        data: {
          id: category.id,
          label: category.label,
          category: category.category,
        },
      });
    })
  );

  await Promise.all(
    getProducts().map((product) => {
      return db.products.create({
        data: {
          name: product.name,
          quantity: product.quantity,
          image: product.image,
          price: product.price,
          category_name: product.category,
          department_name: product.department,
        },
      });
    })
  );
}

seed();

function getDepartments() {
  return [
    {
      id: 1,
      label: "Living Room",
      image: "/images/departments/living-room.jpg",
      department: "living-room",
    },
    {
      id: 2,
      label: "Bedroom",
      image: "/images/departments/bedroom.jpg",
      department: "bedroom",
    },
    {
      id: 3,
      label: "Dining Room",
      image: "/images/departments/dining-room.jpg",
      department: "dining-room",
    },
    {
      id: 4,
      label: "Home Office/Office",
      image: "/images/departments/home-office.jpg",
      department: "office",
    },
    {
      id: 5,
      label: "Outdoor",
      image: "/images/departments/outdoor.jpg",
      department: "outdoor",
    },
    {
      id: 6,
      label: "Kids' Furniture",
      image: "/images/departments/kids-furniture.jpg",
      department: "kids-furniture",
    },
    {
      id: 7,
      label: "Storage & Organization",
      image: "/images/departments/store-furniture.jpg",
      department: "store-organization",
    },
    {
      id: 8,
      label: "Lighting",
      image: "/images/departments/lighting.jpg",
      department: "lighting",
    },
    {
      id: 9,
      label: "Decor & Accessories",
      image: "/images/departments/decoration.jpg",
      department: "decor-accessories",
    },
    {
      id: 10,
      label: "Special Offers",
      image: "/images/departments/special-offers.jpg",
      department: "special-offers",
    },
  ];
}

function getCategories() {
  return [
    {
      id: 1,
      label: "Bed",
      category: "bed",
    },
    {
      id: 2,
      label: "Sofa",
      category: "sofa",
    },
    {
      id: 3,
      label: "Armchair",
      category: "armchair",
    },
    {
      id: 4,
      label: "Chair",
      category: "chair",
    },
    {
      id: 5,
      label: "Table",
      category: "table",
    },
  ];
}

function getProducts() {
  return [
    {
      id: -1,
      name: "Small Green Sofa",
      image: "/images/products/sofa/small-green-sofa.jpg",
      price: 10000,
      department: "living-room",
      category: "sofa",
      quantity: 100,
    },
    {
      id: -2,
      name: "Yellow Armchair",
      image: "/images/products/armchair/yellow-armchair.jpg",
      price: 10000,
      department: "living-room",
      category: "armchair",
      quantity: 124,
    },
    {
      id: -3,
      name: "Small Grey Sofa",
      image: "/images/products/sofa/small-grey-sofa.jpg",
      price: 10000,
      department: "living-room",
      category: "sofa",
      quantity: 252,
    },
    {
      id: -4,
      name: "Large Black Sofa",
      image: "/images/products/sofa/large-black-sofa.jpg",
      price: 10000,
      department: "living-room",
      category: "sofa",
      quantity: 23,
    },
    {
      id: -5,
      name: "Large White Bed",
      image: "/images/products/bed/large-white-bed.jpg",
      price: 30000,
      department: "bedroom",
      category: "bed",
      quantity: 10,
    },
    {
      id: -6,
      name: "Large White Bed 2",
      image: "/images/products/bed/large-white-bed-2.jpg",
      price: 40000,
      department: "bedroom",
      category: "bed",
      quantity: 103,
    },
    {
      id: -7,
      name: "Large White Bed 3",
      image: "/images/products/bed/large-white-bed-3.jpg",
      price: 50000,
      department: "bedroom",
      category: "bed",
      quantity: 92,
    },
    {
      id: -8,
      name: "Large White Bed 4",
      image: "/images/products/bed/large-white-bed-4.jpg",
      price: 100000,
      department: "bedroom",
      category: "bed",
      quantity: 24,
    },
    {
      id: -9,
      name: "Large Grey Bed",
      image: "/images/products/bed/large-grey-bed.jpg",
      price: 30000,
      department: "bedroom",
      category: "bed",
      quantity: 12,
    },
    {
      id: -10,
      name: "Orange Armchair",
      image: "/images/products/armchair/orange-armchair.png",
      price: 15990,
      department: "living-room",
      category: "armchair",
      quantity: 120,
    },
    {
      id: -11,
      name: "Table 4 People",
      image: "/images/products/table/table-4-people.png",
      price: 35790,
      department: "dining-room",
      category: "table",
      quantity: 12,
    },
    {
      id: -12,
      name: "Table 8 People",
      image: "/images/products/table/table-8-people.png",
      price: 62990,
      department: "dining-room",
      category: "table",
      quantity: 22,
    },
    {
      id: -13,
      name: "Pink Kids Bed",
      image: "/images/products/bed/pink-kids-bed.png",
      price: 35000,
      department: "kids-furniture",
      category: "bed",
      quantity: 12,
    },
    {
      id: -14,
      name: "Kids Table",
      image: "/images/products/table/kids-table.png",
      price: 26000,
      department: "kids-furniture",
      category: "table",
      quantity: 12,
    },
    {
      id: -15,
      name: "Big Office Table 1",
      image: "/images/products/table/big-office-table-1.jpg",
      price: 170000,
      department: "office",
      category: "table",
      quantity: 12,
    },
    {
      id: -16,
      name: "Big Office Table 2",
      image: "/images/products/table/big-office-table-2.jpg",
      price: 150000,
      department: "office",
      category: "table",
      quantity: 12,
    },
    {
      id: -17,
      name: "Office Chair 1",
      image: "/images/products/chair/office-chair-1.jpg",
      price: 40000,
      department: "office",
      category: "chair",
      quantity: 42,
    },
    {
      id: -18,
      name: "Office Chair 2",
      image: "/images/products/chair/office-chair-2.jpg",
      price: 30000,
      department: "office",
      category: "chair",
      quantity: 12,
    },
    {
      id: -19,
      name: "Office Armchair",
      image: "/images/products/armchair/office-armchair.jpg",
      price: 30000,
      department: "office",
      category: "armchair",
      quantity: 12,
    },
    {
      id: -20,
      name: "Outdoor Chair 1",
      image: "/images/products/chair/outdoor-char-1.jpg",
      price: 10000,
      department: "outdoor",
      category: "chair",
      quantity: 120,
    },
    {
      id: -21,
      name: "Outdoor Chair 2",
      image: "/images/products/chair/outdoor-chair-2.jpg",
      price: 15000,
      department: "outdoor",
      category: "chair",
      quantity: 12,
    },
    {
      id: -22,
      name: "Outdoor Table 1",
      image: "/images/products/table/outdoor-table-1.jpg",
      price: 55390,
      department: "outdoor",
      category: "table",
      quantity: 12,
    },
    {
      id: -23,
      name: "Outdoor Table 2",
      image: "/images/products/table/outdoor-table-2.jpg",
      price: 39990,
      department: "outdoor",
      category: "table",
      quantity: 52,
    },
    {
      id: -24,
      name: "Outdoor Sofa",
      image: "/images/products/sofa/outdoor-sofa.jpg",
      price: 90000,
      department: "outdoor",
      category: "sofa",
      quantity: 12,
    },
  ];
}
