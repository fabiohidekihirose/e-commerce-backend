import { db } from "../src/utils/db.server";

async function seed() {
  await db.product.deleteMany({});
  await db.category.deleteMany({});
  await db.department.deleteMany({});

  await Promise.all(
    getDepartments().map((department) => {
      return db.department.create({
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
      return db.category.create({
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
      return db.product.create({
        data: {
          id: product.id,
          name: product.name,
          quantity: product.quantity,
          image: product.image,
          price: product.price,
          category_name: product.category,
          department_name: product.department,
          description: product.description,
          discount: product.discount,
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
    {
      id: 6,
      label: "Book Shelf",
      category: "book-shelf",
    },
    {
      id: 7,
      label: "Lamp",
      category: "lamp",
    },
    {
      id: 8,
      label: "Mirror",
      category: "mirror",
    },
    {
      id: 9,
      label: "Picture",
      category: "picture",
    },
    {
      id: 10,
      label: "Plant",
      category: "plant",
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
      discount: 0,
      description:
        "Introducing our exquisite sofa, a true embodiment of comfort and style. Crafted with meticulous attention to detail, this sofa seamlessly combines luxurious aesthetics with exceptional functionality. Its plush cushions and ergonomic design provide an unparalleled level of comfort, inviting you to sink in and unwind after a long day. The sofa's sturdy construction and premium upholstery ensure durability, making it a long-lasting addition to your living space. With its timeless elegance and versatile appeal, this sofa effortlessly complements a range of interior styles. Whether you're hosting guests or enjoying a quiet evening, our sofa promises to be the perfect centerpiece for your home, offering both comfort and aesthetic allure.",
    },
    {
      id: -2,
      name: "Yellow Armchair",
      image: "/images/products/armchair/yellow-armchair.jpg",
      price: 10000,
      department: "living-room",
      category: "armchair",
      quantity: 124,
      discount: 0,
      description:
        "Introducing our luxurious armchair, where comfort meets elegance. Designed with both style and relaxation in mind, this armchair is a true centerpiece for any living space. Its plush cushioning and ergonomic design offer optimal support, allowing you to sink in and unwind after a long day. Crafted with the finest materials, this armchair exudes sophistication and durability, promising years of comfortable seating. Its timeless design effortlessly complements a range of interior styles, from classic to contemporary. Whether you're curling up with a book or enjoying a cozy conversation, this armchair provides the perfect sanctuary for relaxation. Indulge in the ultimate comfort and style with our exquisite armchair, a true testament to refined living.",
    },
    {
      id: -3,
      name: "Small Grey Sofa",
      image: "/images/products/sofa/small-grey-sofa.jpg",
      price: 10000,
      department: "living-room",
      category: "sofa",
      quantity: 252,
      discount: 10,
      description:
        "Introducing our exquisite sofa, a true embodiment of comfort and style. Crafted with meticulous attention to detail, this sofa seamlessly combines luxurious aesthetics with exceptional functionality. Its plush cushions and ergonomic design provide an unparalleled level of comfort, inviting you to sink in and unwind after a long day. The sofa's sturdy construction and premium upholstery ensure durability, making it a long-lasting addition to your living space. With its timeless elegance and versatile appeal, this sofa effortlessly complements a range of interior styles. Whether you're hosting guests or enjoying a quiet evening, our sofa promises to be the perfect centerpiece for your home, offering both comfort and aesthetic allure.",
    },
    {
      id: -4,
      name: "Large Black Sofa",
      image: "/images/products/sofa/large-black-sofa.jpg",
      price: 10000,
      department: "living-room",
      category: "sofa",
      quantity: 23,
      discount: 0,
      description:
        "Introducing our exquisite sofa, a true embodiment of comfort and style. Crafted with meticulous attention to detail, this sofa seamlessly combines luxurious aesthetics with exceptional functionality. Its plush cushions and ergonomic design provide an unparalleled level of comfort, inviting you to sink in and unwind after a long day. The sofa's sturdy construction and premium upholstery ensure durability, making it a long-lasting addition to your living space. With its timeless elegance and versatile appeal, this sofa effortlessly complements a range of interior styles. Whether you're hosting guests or enjoying a quiet evening, our sofa promises to be the perfect centerpiece for your home, offering both comfort and aesthetic allure.",
    },
    {
      id: -5,
      name: "Large White Bed",
      image: "/images/products/bed/large-white-bed.jpg",
      price: 30000,
      department: "bedroom",
      category: "bed",
      quantity: 10,
      discount: 0,
      description:
        "Introducing our exquisite bed, where comfort meets luxury. Designed with utmost attention to detail, this bed offers a serene haven for restful nights and rejuvenating sleep. Crafted with premium materials and a sturdy frame, it ensures exceptional durability and long-lasting support. The bed's plush mattress provides the perfect balance between softness and firmness, cradling your body for optimal comfort. With its elegant design and versatile aesthetics, this bed seamlessly complements a range of bedroom styles, from contemporary to classic. Whether you're creating a peaceful retreat or a statement piece for your bedroom, our bed adds a touch of sophistication to your space. Indulge in a night of blissful sleep and awaken refreshed with our exceptional bed, where luxury and comfort harmonize for the ultimate sleeping experience.",
    },
    {
      id: -6,
      name: "Large White Bed 2",
      image: "/images/products/bed/large-white-bed-2.jpg",
      price: 40000,
      department: "bedroom",
      category: "bed",
      quantity: 103,
      discount: 0,
      description:
        "Introducing our exquisite bed, where comfort meets luxury. Designed with utmost attention to detail, this bed offers a serene haven for restful nights and rejuvenating sleep. Crafted with premium materials and a sturdy frame, it ensures exceptional durability and long-lasting support. The bed's plush mattress provides the perfect balance between softness and firmness, cradling your body for optimal comfort. With its elegant design and versatile aesthetics, this bed seamlessly complements a range of bedroom styles, from contemporary to classic. Whether you're creating a peaceful retreat or a statement piece for your bedroom, our bed adds a touch of sophistication to your space. Indulge in a night of blissful sleep and awaken refreshed with our exceptional bed, where luxury and comfort harmonize for the ultimate sleeping experience.",
    },
    {
      id: -7,
      name: "Large White Bed 3",
      image: "/images/products/bed/large-white-bed-3.jpg",
      price: 50000,
      department: "bedroom",
      category: "bed",
      quantity: 92,
      discount: 0,
      description:
        "Introducing our exquisite bed, where comfort meets luxury. Designed with utmost attention to detail, this bed offers a serene haven for restful nights and rejuvenating sleep. Crafted with premium materials and a sturdy frame, it ensures exceptional durability and long-lasting support. The bed's plush mattress provides the perfect balance between softness and firmness, cradling your body for optimal comfort. With its elegant design and versatile aesthetics, this bed seamlessly complements a range of bedroom styles, from contemporary to classic. Whether you're creating a peaceful retreat or a statement piece for your bedroom, our bed adds a touch of sophistication to your space. Indulge in a night of blissful sleep and awaken refreshed with our exceptional bed, where luxury and comfort harmonize for the ultimate sleeping experience.",
    },
    {
      id: -8,
      name: "Large White Bed 4",
      image: "/images/products/bed/large-white-bed-4.jpg",
      price: 100000,
      department: "bedroom",
      category: "bed",
      quantity: 24,
      discount: 30,
      description:
        "Introducing our exquisite bed, where comfort meets luxury. Designed with utmost attention to detail, this bed offers a serene haven for restful nights and rejuvenating sleep. Crafted with premium materials and a sturdy frame, it ensures exceptional durability and long-lasting support. The bed's plush mattress provides the perfect balance between softness and firmness, cradling your body for optimal comfort. With its elegant design and versatile aesthetics, this bed seamlessly complements a range of bedroom styles, from contemporary to classic. Whether you're creating a peaceful retreat or a statement piece for your bedroom, our bed adds a touch of sophistication to your space. Indulge in a night of blissful sleep and awaken refreshed with our exceptional bed, where luxury and comfort harmonize for the ultimate sleeping experience.",
    },
    {
      id: -9,
      name: "Large Grey Bed",
      image: "/images/products/bed/large-grey-bed.jpg",
      price: 30000,
      department: "bedroom",
      category: "bed",
      quantity: 12,
      discount: 0,
      description:
        "Introducing our exquisite bed, where comfort meets luxury. Designed with utmost attention to detail, this bed offers a serene haven for restful nights and rejuvenating sleep. Crafted with premium materials and a sturdy frame, it ensures exceptional durability and long-lasting support. The bed's plush mattress provides the perfect balance between softness and firmness, cradling your body for optimal comfort. With its elegant design and versatile aesthetics, this bed seamlessly complements a range of bedroom styles, from contemporary to classic. Whether you're creating a peaceful retreat or a statement piece for your bedroom, our bed adds a touch of sophistication to your space. Indulge in a night of blissful sleep and awaken refreshed with our exceptional bed, where luxury and comfort harmonize for the ultimate sleeping experience.",
    },
    {
      id: -10,
      name: "Orange Armchair",
      image: "/images/products/armchair/orange-armchair.png",
      price: 15990,
      department: "living-room",
      category: "armchair",
      quantity: 120,
      discount: 50,
      description:
        "Introducing our luxurious armchair, where comfort meets elegance. Designed with both style and relaxation in mind, this armchair is a true centerpiece for any living space. Its plush cushioning and ergonomic design offer optimal support, allowing you to sink in and unwind after a long day. Crafted with the finest materials, this armchair exudes sophistication and durability, promising years of comfortable seating. Its timeless design effortlessly complements a range of interior styles, from classic to contemporary. Whether you're curling up with a book or enjoying a cozy conversation, this armchair provides the perfect sanctuary for relaxation. Indulge in the ultimate comfort and style with our exquisite armchair, a true testament to refined living.",
    },
    {
      id: -11,
      name: "Table 4 People",
      image: "/images/products/table/table-4-people.png",
      price: 35790,
      department: "dining-room",
      category: "table",
      quantity: 12,
      discount: 0,
      description:
        "Introducing our stunning table, a fusion of exquisite craftsmanship and practicality. Designed to be both functional and visually captivating, this table adds a touch of elegance to any space. Its sturdy construction and high-quality materials ensure durability and longevity, making it a reliable choice for everyday use. The table's sleek and modern design seamlessly blends with a variety of interior styles, enhancing the overall aesthetics of your home. Whether you're gathering around it for family meals or using it as a focal point for social gatherings, this table provides ample surface area for dining, working, or displaying decor. With its attention to detail and timeless appeal, our table is not just a piece of furniture but a statement piece that elevates your living space to new heights of sophistication.",
    },
    {
      id: -12,
      name: "Table 8 People",
      image: "/images/products/table/table-8-people.png",
      price: 62990,
      department: "dining-room",
      category: "table",
      quantity: 22,
      discount: 0,
      description:
        "Introducing our stunning table, a fusion of exquisite craftsmanship and practicality. Designed to be both functional and visually captivating, this table adds a touch of elegance to any space. Its sturdy construction and high-quality materials ensure durability and longevity, making it a reliable choice for everyday use. The table's sleek and modern design seamlessly blends with a variety of interior styles, enhancing the overall aesthetics of your home. Whether you're gathering around it for family meals or using it as a focal point for social gatherings, this table provides ample surface area for dining, working, or displaying decor. With its attention to detail and timeless appeal, our table is not just a piece of furniture but a statement piece that elevates your living space to new heights of sophistication.",
    },
    {
      id: -13,
      name: "Pink Kids Bed",
      image: "/images/products/bed/pink-kids-bed.png",
      price: 35000,
      department: "kids-furniture",
      category: "bed",
      quantity: 12,
      discount: 0,
      description:
        "Introducing our exquisite bed, where comfort meets luxury. Designed with utmost attention to detail, this bed offers a serene haven for restful nights and rejuvenating sleep. Crafted with premium materials and a sturdy frame, it ensures exceptional durability and long-lasting support. The bed's plush mattress provides the perfect balance between softness and firmness, cradling your body for optimal comfort. With its elegant design and versatile aesthetics, this bed seamlessly complements a range of bedroom styles, from contemporary to classic. Whether you're creating a peaceful retreat or a statement piece for your bedroom, our bed adds a touch of sophistication to your space. Indulge in a night of blissful sleep and awaken refreshed with our exceptional bed, where luxury and comfort harmonize for the ultimate sleeping experience.",
    },
    {
      id: -14,
      name: "Kids Table",
      image: "/images/products/table/kids-table.png",
      price: 26000,
      department: "kids-furniture",
      category: "table",
      quantity: 12,
      discount: 20,
      description:
        "Introducing our stunning table, a fusion of exquisite craftsmanship and practicality. Designed to be both functional and visually captivating, this table adds a touch of elegance to any space. Its sturdy construction and high-quality materials ensure durability and longevity, making it a reliable choice for everyday use. The table's sleek and modern design seamlessly blends with a variety of interior styles, enhancing the overall aesthetics of your home. Whether you're gathering around it for family meals or using it as a focal point for social gatherings, this table provides ample surface area for dining, working, or displaying decor. With its attention to detail and timeless appeal, our table is not just a piece of furniture but a statement piece that elevates your living space to new heights of sophistication.",
    },
    {
      id: -15,
      name: "Big Office Table 1",
      image: "/images/products/table/big-office-table-1.jpg",
      price: 170000,
      department: "office",
      category: "table",
      quantity: 12,
      discount: 50,
      description:
        "Introducing our stunning table, a fusion of exquisite craftsmanship and practicality. Designed to be both functional and visually captivating, this table adds a touch of elegance to any space. Its sturdy construction and high-quality materials ensure durability and longevity, making it a reliable choice for everyday use. The table's sleek and modern design seamlessly blends with a variety of interior styles, enhancing the overall aesthetics of your home. Whether you're gathering around it for family meals or using it as a focal point for social gatherings, this table provides ample surface area for dining, working, or displaying decor. With its attention to detail and timeless appeal, our table is not just a piece of furniture but a statement piece that elevates your living space to new heights of sophistication.",
    },
    {
      id: -16,
      name: "Big Office Table 2",
      image: "/images/products/table/big-office-table-2.jpg",
      price: 150000,
      department: "office",
      category: "table",
      quantity: 12,
      discount: 0,
      description:
        "Introducing our stunning table, a fusion of exquisite craftsmanship and practicality. Designed to be both functional and visually captivating, this table adds a touch of elegance to any space. Its sturdy construction and high-quality materials ensure durability and longevity, making it a reliable choice for everyday use. The table's sleek and modern design seamlessly blends with a variety of interior styles, enhancing the overall aesthetics of your home. Whether you're gathering around it for family meals or using it as a focal point for social gatherings, this table provides ample surface area for dining, working, or displaying decor. With its attention to detail and timeless appeal, our table is not just a piece of furniture but a statement piece that elevates your living space to new heights of sophistication.",
    },
    {
      id: -17,
      name: "Office Chair 1",
      image: "/images/products/chair/office-chair-1.jpg",
      price: 40000,
      department: "office",
      category: "chair",
      quantity: 42,
      discount: 35,
      description:
        "Introducing our stylish chair, a perfect blend of form and function. This chair is designed to provide both comfort and aesthetic appeal, making it an ideal addition to any living or working space. Its ergonomic design ensures proper posture and support, allowing you to sit comfortably for extended periods. Crafted with high-quality materials, this chair is built to withstand daily use and offers long-lasting durability. With its sleek and versatile design, it effortlessly complements a variety of interior styles, from modern to traditional. Whether you're using it as a desk chair or as additional seating for guests, our chair combines practicality and style seamlessly. Elevate your space with our exceptional chair, offering both comfort and visual allure for a truly enhanced seating experience.",
    },
    {
      id: -18,
      name: "Office Chair 2",
      image: "/images/products/chair/office-chair-2.jpg",
      price: 30000,
      department: "office",
      category: "chair",
      quantity: 12,
      discount: 0,
      description:
        "Introducing our stylish chair, a perfect blend of form and function. This chair is designed to provide both comfort and aesthetic appeal, making it an ideal addition to any living or working space. Its ergonomic design ensures proper posture and support, allowing you to sit comfortably for extended periods. Crafted with high-quality materials, this chair is built to withstand daily use and offers long-lasting durability. With its sleek and versatile design, it effortlessly complements a variety of interior styles, from modern to traditional. Whether you're using it as a desk chair or as additional seating for guests, our chair combines practicality and style seamlessly. Elevate your space with our exceptional chair, offering both comfort and visual allure for a truly enhanced seating experience.",
    },
    {
      id: -19,
      name: "Office Armchair",
      image: "/images/products/armchair/office-armchair.jpg",
      price: 30000,
      department: "office",
      category: "armchair",
      quantity: 12,
      discount: 0,
      description:
        "Introducing our luxurious armchair, where comfort meets elegance. Designed with both style and relaxation in mind, this armchair is a true centerpiece for any living space. Its plush cushioning and ergonomic design offer optimal support, allowing you to sink in and unwind after a long day. Crafted with the finest materials, this armchair exudes sophistication and durability, promising years of comfortable seating. Its timeless design effortlessly complements a range of interior styles, from classic to contemporary. Whether you're curling up with a book or enjoying a cozy conversation, this armchair provides the perfect sanctuary for relaxation. Indulge in the ultimate comfort and style with our exquisite armchair, a true testament to refined living.",
    },
    {
      id: -20,
      name: "Outdoor Chair 1",
      image: "/images/products/chair/outdoor-chair-1.jpg",
      price: 10000,
      department: "outdoor",
      category: "chair",
      quantity: 120,
      discount: 0,
      description:
        "Introducing our stylish chair, a perfect blend of form and function. This chair is designed to provide both comfort and aesthetic appeal, making it an ideal addition to any living or working space. Its ergonomic design ensures proper posture and support, allowing you to sit comfortably for extended periods. Crafted with high-quality materials, this chair is built to withstand daily use and offers long-lasting durability. With its sleek and versatile design, it effortlessly complements a variety of interior styles, from modern to traditional. Whether you're using it as a desk chair or as additional seating for guests, our chair combines practicality and style seamlessly. Elevate your space with our exceptional chair, offering both comfort and visual allure for a truly enhanced seating experience.",
    },
    {
      id: -21,
      name: "Outdoor Chair 2",
      image: "/images/products/chair/outdoor-chair-2.jpg",
      price: 15000,
      department: "outdoor",
      category: "chair",
      quantity: 12,
      discount: 50,
      description:
        "Introducing our stylish chair, a perfect blend of form and function. This chair is designed to provide both comfort and aesthetic appeal, making it an ideal addition to any living or working space. Its ergonomic design ensures proper posture and support, allowing you to sit comfortably for extended periods. Crafted with high-quality materials, this chair is built to withstand daily use and offers long-lasting durability. With its sleek and versatile design, it effortlessly complements a variety of interior styles, from modern to traditional. Whether you're using it as a desk chair or as additional seating for guests, our chair combines practicality and style seamlessly. Elevate your space with our exceptional chair, offering both comfort and visual allure for a truly enhanced seating experience.",
    },
    {
      id: -22,
      name: "Outdoor Table 1",
      image: "/images/products/table/outdoor-table-1.jpg",
      price: 55390,
      department: "outdoor",
      category: "table",
      quantity: 12,
      discount: 0,
      description:
        "Introducing our stunning table, a fusion of exquisite craftsmanship and practicality. Designed to be both functional and visually captivating, this table adds a touch of elegance to any space. Its sturdy construction and high-quality materials ensure durability and longevity, making it a reliable choice for everyday use. The table's sleek and modern design seamlessly blends with a variety of interior styles, enhancing the overall aesthetics of your home. Whether you're gathering around it for family meals or using it as a focal point for social gatherings, this table provides ample surface area for dining, working, or displaying decor. With its attention to detail and timeless appeal, our table is not just a piece of furniture but a statement piece that elevates your living space to new heights of sophistication.",
    },
    {
      id: -23,
      name: "Outdoor Table 2",
      image: "/images/products/table/outdoor-table-2.jpg",
      price: 39990,
      department: "outdoor",
      category: "table",
      quantity: 52,
      discount: 10,
      description:
        "Introducing our stunning table, a fusion of exquisite craftsmanship and practicality. Designed to be both functional and visually captivating, this table adds a touch of elegance to any space. Its sturdy construction and high-quality materials ensure durability and longevity, making it a reliable choice for everyday use. The table's sleek and modern design seamlessly blends with a variety of interior styles, enhancing the overall aesthetics of your home. Whether you're gathering around it for family meals or using it as a focal point for social gatherings, this table provides ample surface area for dining, working, or displaying decor. With its attention to detail and timeless appeal, our table is not just a piece of furniture but a statement piece that elevates your living space to new heights of sophistication.",
    },
    {
      id: -24,
      name: "Outdoor Sofa",
      image: "/images/products/sofa/outdoor-sofa.jpg",
      price: 90000,
      department: "outdoor",
      category: "sofa",
      quantity: 12,
      discount: 20,
      description:
        "Introducing our exquisite sofa, a true embodiment of comfort and style. Crafted with meticulous attention to detail, this sofa seamlessly combines luxurious aesthetics with exceptional functionality. Its plush cushions and ergonomic design provide an unparalleled level of comfort, inviting you to sink in and unwind after a long day. The sofa's sturdy construction and premium upholstery ensure durability, making it a long-lasting addition to your living space. With its timeless elegance and versatile appeal, this sofa effortlessly complements a range of interior styles. Whether you're hosting guests or enjoying a quiet evening, our sofa promises to be the perfect centerpiece for your home, offering both comfort and aesthetic allure.",
    },
    {
      id: -25,
      name: "Big Book Shelf",
      image: "/images/products/book-shelf/big-book-shelf.png",
      price: 200000,
      department: "store-organization",
      category: "book-shelf",
      quantity: 4,
      discount: 30,
      description:
        "It creates an immersive sanctuary—a place to reflect, imagine, and expand one's horizons. Lose track of time as you wander its towering aisles, encountering worlds both familiar and unknown, savoring the joy of intellectual exploration.",
    },
    {
      id: -26,
      name: "Medium Book Shelf",
      image: "/images/products/book-shelf/medium-book-shelf.png",
      price: 200000,
      department: "store-organization",
      category: "book-shelf",
      quantity: 5,
      discount: 0,
      description:
        "It creates an immersive sanctuary—a place to reflect, imagine, and expand one's horizons. Lose track of time as you wander its towering aisles, encountering worlds both familiar and unknown, savoring the joy of intellectual exploration.",
    },
    {
      id: -27,
      name: "Bedroom Lamp",
      image: "/images/products/lamp/bedroom-lamp.png",
      price: 3000,
      department: "lighting",
      category: "lamp",
      quantity: 50,
      discount: 10,
      description:
        "Crafted with a harmonious combination of premium materials and contemporary design, its sleek and slender frame, available in polished metal or richly textured wood, exudes a sense of modernity, making it an exquisite addition to any decor style.",
    },
    {
      id: -28,
      name: "Dining Lamp",
      image: "/images/products/lamp/dining-lamp.png",
      price: 5000,
      department: "lighting",
      category: "lamp",
      quantity: 120,
      discount: 0,
      description:
        "Crafted with a harmonious combination of premium materials and contemporary design, its sleek and slender frame, available in polished metal or richly textured wood, exudes a sense of modernity, making it an exquisite addition to any decor style.",
    },
    {
      id: -29,
      name: "Study Lamp",
      image: "/images/products/lamp/study-lamp.png",
      price: 2000,
      department: "lighting",
      category: "lamp",
      quantity: 150,
      discount: 10,
      description:
        "Crafted with a harmonious combination of premium materials and contemporary design, its sleek and slender frame, available in polished metal or richly textured wood, exudes a sense of modernity, making it an exquisite addition to any decor style.",
    },
    {
      id: -30,
      name: "White Lamp",
      image: "/images/products/lamp/white-lamp.png",
      price: 6000,
      department: "lighting",
      category: "lamp",
      quantity: 50,
      discount: 0,
      description:
        "Crafted with a harmonious combination of premium materials and contemporary design, its sleek and slender frame, available in polished metal or richly textured wood, exudes a sense of modernity, making it an exquisite addition to any decor style.",
    },
    {
      id: -31,
      name: "Big Mirror",
      image: "/images/products/mirror/big-mirror.png",
      price: 54900,
      department: "decor-accessories",
      category: "mirror",
      quantity: 50,
      discount: 20,
      description:
        "Crafted with a harmonious combination of premium materials and contemporary design, its sleek and slender frame, available in polished metal or richly textured wood, exudes a sense of modernity, making it an exquisite addition to any decor style.",
    },
    {
      id: -32,
      name: "Small Mirror",
      image: "/images/products/mirror/small-mirror.png",
      price: 14900,
      department: "decor-accessories",
      category: "mirror",
      quantity: 50,
      discount: 50,
      description:
        "Crafted with a harmonious combination of premium materials and contemporary design, its sleek and slender frame, available in polished metal or richly textured wood, exudes a sense of modernity, making it an exquisite addition to any decor style.",
    },
    {
      id: -33,
      name: "Big Picture",
      image: "/images/products/picture/big-picture.png",
      price: 149000,
      department: "decor-accessories",
      category: "picture",
      quantity: 40,
      discount: 50,
      description:
        "Crafted with a harmonious combination of premium materials and contemporary design, its sleek and slender frame, available in polished metal or richly textured wood, exudes a sense of modernity, making it an exquisite addition to any decor style.",
    },
    {
      id: -34,
      name: "Medium Plant",
      image: "/images/products/plant/medium-plant.png",
      price: 9900,
      department: "decor-accessories",
      category: "plant",
      quantity: 40,
      discount: 0,
      description:
        "Crafted with a harmonious combination of premium materials and contemporary design, its sleek and slender frame, available in polished metal or richly textured wood, exudes a sense of modernity, making it an exquisite addition to any decor style.",
    },
  ];
}
