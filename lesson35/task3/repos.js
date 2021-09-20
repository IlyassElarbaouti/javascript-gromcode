const list = document.querySelector('.repo-list')

export const cleanReposList = ()=>{
    list.innerHTML='';
}

export const reposRender = (reposList)=>{
    const reposListElems = reposList.map(({name})=>{
        const listElem = document.createElement('li');
        listElem.classList.add('repo-list__item');
        listElem.textContent = name;
        return listElem
    })
    cleanReposList();
    list.append(...reposListElems)
}
