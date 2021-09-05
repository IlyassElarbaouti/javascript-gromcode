export const finishList = ()=>{
    const special = document.querySelector('.special');
    const list = document.querySelector('.list');

    const listItemOne = document.createElement('li');
    listItemOne.textContent = '1'
    list.prepend(listItemOne);

    const listItemFour = document.createElement('li');
    listItemFour.textContent = '4';
    special.before(listItemFour);

    const listItemSix = document.createElement('li');
    listItemSix.textContent = '6';
    special.after(listItemSix);
    
    const listItemEight = document.createElement('li');
    listItemEight.textContent = '8';
    list.append(listItemEight)

}
finishList()