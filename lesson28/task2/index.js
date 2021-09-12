
// input: obj,arr
// output:obj
export const markFavorites = (tree,favorites)=>{
const isFavorite = favorites.includes(tree.id)
return  {
    ...tree,
    isFavorite,
    nodes : tree.nodes.map(childnode=> markFavorites(childnode,favorites))
}
};


