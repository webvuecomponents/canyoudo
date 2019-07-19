<template>
  <div ref="current">
    <el-autocomplete :value-key='valueKey'
                     v-model="name"
                     :fetch-suggestions="querySearchAsync"
                     :placeholder="placeholder"
                     :trigger-on-focus="false"
                     @select="handleSelect">
    </el-autocomplete>
  </div>
</template>
<script>
export default {
  props: ['url', 'placeholder', 'param', 'valueKey', 'obj'],
  data () {
    return {
      parkNameList: [],
      name: ''
    }
  },
  methods: {
    clearName () {
      this.name = ''
    },
    writeName (data) {
      this.name = data
    },
    querySearchAsync (queryString, cb) {
      if (queryString) {
        queryString = queryString.replace(/\s/g, "");
        let data = this.getKey(this.param, queryString)
        if (this.parkNameList) {
          this.$axios
            .get(this.url, {
              data: {
                ...data,
                ...this.obj
              }
            })
            .then(res => {
              let arr = res.value;
              cb(arr);
            });
        } else {
          let searchParkList = this.parkNameList;
          let results = queryString
            ? searchParkList.filter(this.createFilter(queryString))
            : searchParkList;
          // 调用 callback 返回建议列表的数据
          cb(results);
        }
      }
    },
    getKey (key, value) {
      let data = {};
      data[key] = value
      return data
    },
    handleSelect (item) {
      this.$emit("receiveData", { value: item, key: this.param });
      this.name = item[this.valueKey];
    }
  },
  watch: {
    name: {
      handler (newVal, oldVal) {
        if (!newVal) {
          this.$emit("receiveData", { value: '', key: this.param });
        }
      },
      deep: true
    }
  },
  mounted () { }
};
</script>