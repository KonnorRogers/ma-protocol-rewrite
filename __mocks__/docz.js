const docz = jest.genMockFromModule("docz")

// name, route, id
const doc1 = {
  id: 0,
  route: "/",
  name: "firstDoc",
}
const doc2 = {
  id: 1,
  route: "/second-doc",
  name: "secondDoc",
}
const doc3 = {
  id: 2,
  route: "/second-doc",
  name: "secondDoc",
}

const allDocz = [doc1, doc2, doc3]

let currentDoc = doc1

function setCurrentDoc(id) {
  currentDoc = allDocz[id]
}

function useCurrentDoc() {
  return currentDoc
}

function useDocs() {
  return allDocz
}

docz.setCurrentDoc = setCurrentDoc
docz.useCurrentDoc = useCurrentDoc
docz.useDocs = useDocs

module.exports = docz
