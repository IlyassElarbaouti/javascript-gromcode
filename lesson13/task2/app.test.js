import getSum, { getSquaredArray , getOddNumbers} from "./calculator";

it('should return squared numbers',()=>{
    const result = getSquaredArray([1,2,3])
    expect(result).toEqual([1,4,9]);
});
it('should return odd numbers',()=>{
    const result = getOddNumbers([1,2,3])
    expect(result).toEqual([1,3]);
});
it('should get sum of numbers',()=>{
    const result = getSum(1,3);
    expect(result).toEqual(4);
});

