const docz = jest.genMockFromModule("docz")

// name, route, id
const prevDoc = {
  id: 0,
  route: "/",
  name: "firstDoc",
}
const currentDoc = {
  id: 1,
  route: "/second-doc",
  name: "secondDoc",
}
const nextDoc = {
  id: 2,
  route: "/second-doc",
  name: "secondDoc",
}

const allDocz = [prevDoc, currentDoc, nextDoc]

function useCurrentDoc() {
  return currentDoc
}

function useDocs() {
  return allDocz
}

docz.useCurrentDoc = useCurrentDoc
docz.useDocs = useDocs

module.exports = docz
