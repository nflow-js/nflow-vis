import nflow from 'nflow'
import Parser from '../parser/parser'

export default (parent)=>(
  nflow.create('nflow-vis')
    .parent(parent)
    .call(Parser)
)