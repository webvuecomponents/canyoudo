import infoTable from './src/info-table'

infoTable.install = function(Vue, options) {
    Vue.component('info-table', infoTable);
}

export default infoTable;
