import _ from 'lodash'
import numRef from './ref.json'

export function numberToWord(number) {
    return _.reduce(numRef,(accum,ref)=>{
        return ref.num === number ? ref.word : accum
    },'')
}
export function wordToNumber(word) {
    return _.reduce(numRef,(accum,ref)=>{
        return ref.word === word && word.toLowerCase() ? ref.num : accum
    },-1)
}