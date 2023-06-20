import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-multi-array', IndexField)
  app.component('detail-multi-array', DetailField)
  app.component('form-multi-array', FormField)
})
