import Vue from 'vue'
import Card from './Card'
import Child from './Child'
import Button from './Button'
import Checkbox from './Checkbox'
import Product from './catalog/Product'
import vSelect from 'vselect-component';

import { HasError, AlertError, AlertSuccess } from 'vform'

// Components that are registered globaly.
[
  Card,
  Child,
  Button,
  Checkbox,
  Product,
  HasError,
  AlertError,
  AlertSuccess,
  vSelect,
].forEach(Component => {
  Vue.component(Component.name, Component)
})



