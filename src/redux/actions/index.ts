import * as FilterActionCreators from './filter'
import * as CartActionCreators from './cart'

export default {
    ...FilterActionCreators,
    ...CartActionCreators,
}