import { ProductTag } from "@/types/api"

export const GET_PRODUCT_BY_ID = (id: string) => {
  return `
  {
    producto(where: {id: "${id}"}) {
      description
      id
      price
      size
      stock
      tag
      title
      miniatura {
        url
        id
      }
      backImg {
        id
        url
      }
      frontImg {
        id
        url
      }
    }
  }
  `
}

export const GET_PRODUCTS = (
  tag: ProductTag | null,
  cursor: string | null = null
) => {
  const category = !tag ? "" : tag.replaceAll(" ", "_")
  return `
  {
    productosConnection(
      first: 20,
      ${!cursor ? "" : `after: "${cursor}",`}
      ${
        !tag || tag === ProductTag.Todo
          ? ""
          : `where: {tag_contains_some: ${category}},`
      }
    ) {
      edges {
        cursor
        node {
          description
          id
          price
          size
          stock
          tag
          title
          miniatura {
            url
            id
          }
          backImg {
            id
            url
          }
          frontImg {
            id
            url
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }`
}
