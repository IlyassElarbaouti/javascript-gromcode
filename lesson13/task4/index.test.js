import {calc} from './index';

it('plus',()=>{
    const result = calc('1 + 2');
    expect(result).toEqual('1 + 2 = 3')
})

it('min',()=>{
    const result = calc('1 - 2');
    expect(result).toEqual('1 - 2 = -1')
})

it('multiply',()=>{
    const result = calc('1 * 2');
    expect(result).toEqual('1 * 2 = 2')
})

it('devide',()=>{
    const result = calc('2 / 1');
    expect(result).toEqual('2 / 1 = 2')
})

it('null',()=>{
    const result = calc(4);
    expect(result).toEqual(null)
})