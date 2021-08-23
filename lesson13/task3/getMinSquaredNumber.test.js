import minSquaredNum from './getMinSquaredNumber';

it('should return minimum squared number from array',()=>{
    const result= minSquaredNum([-777,3,-2,6,45,-20])
    expect(result).toEqual(4)
})