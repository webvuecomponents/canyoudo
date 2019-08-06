<template>
  <input type="text"
         placeholder="请选择回溯时间"
         id="commonTime"
         @focus="focus"
         @blur="blur"
         v-model="time" />
</template>
<script>
export default {
  data () {
    return {
      time: '',
      isFocus: false
    }
  },
  props: {
    initTime: {
      type: String
    }
  },
  methods: {
    focus () {
      // 获取焦点禁用
      this.$emit('getDisabled', false)
    },
    blur () {
      // 失去焦点回溯可用
      this.$emit('getDisabled', true)
    },
    onSelectTime (selectTime) {
      var tempTime = selectTime
      if (!this.strDateTime(tempTime)) {
        this.tipInfo('时间格式不对,请重新录入', '提示', false, 'warning')
        tempTime = this.dateToStr(new Date())
      }
      // 把选择的时间返回给父组件
      this.$emit('getTime', tempTime)
    },
    // 时间控件
    changeTime () {
      // 时间控件
      let that = this
      /* eslint-disable */
      $('#commonTime').keypress(function (event, $input) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == 13) {
          that.onSelectTime($(this).val());
          $(this).blur();
        }
      }).datetimepicker({
        datepicker: true,
        timepicker: true,
        format: 'Y-m-d H:i:s',
        mask: '9999-19-39 29:59:59',
        step: 1,
        maxDate: new Date(),
        maxTime: new Date(),
        onShow: function () { },
        onSelectDate: function (c) {
          var maxTime = false;
          var nowDate = new Date();
          var cDate = c.getFullYear() + '-' + c.getMonth() + '-' + c.getDate();
          var nDate = nowDate.getFullYear() + '-' + nowDate.getMonth() + '-' + nowDate.getDate();
          if (cDate == nDate) {
            maxTime = nowDate;
          }
          this.setOptions({
            maxTime: maxTime
          });
        },
        onSelectTime: function (current_time, $input) {
          that.onSelectTime($input.val());
        }
      });
    },
		dateToStr(datetime) {
			let year = datetime.getFullYear();
			let month = datetime.getMonth() + 1; // js从0开始取
			let date = datetime.getDate();
			let hour = datetime.getHours();
			let minutes = datetime.getMinutes();
			let second = datetime.getSeconds();
			if (month < 10) {
				month = "0" + month;
			}
			if (date < 10) {
				date = "0" + date;
			}
			if (hour < 10) {
				hour = "0" + hour;
			}
			if (minutes < 10) {
				minutes = "0" + minutes;
			}
			if (second < 10) {
				second = "0" + second;
			}
			let time = year + "-" + month + "-" + date + " " + hour + ":" + minutes + ":" + second; // 2 009-06-12 17:18:05
			return time;
		},
		strDateTime(str) {
			var reg = /^(\d{4})(-|\/)(\d{2})\2(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;
			var r = str.match(reg);
			if (r == null) return false;
			var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
			return (d.getFullYear() === Number(r[1]) && (d.getMonth() + 1) === Number(r[3]) && d.getDate() === Number(r[4]) && d.getHours() === Number(r[5]) && d.getMinutes() === Number(r[6]) && d.getSeconds() === Number(r[7]));
		}
  },
  created () {
    this.time = this.initTime || this.dateToStr(new Date());
    setTimeout(() => {
      this.changeTime();
    }, 100);
  },
  watch: {
    initTime: {
      handler (newV, oldV) {
        this.time = newV;
      }
    }
  }
};
</script>
<style lang="less">
#commonTime {
	color: #000;
  width: 100%;
  border: none;
  outline: none;
  height: 100%;
  text-align: center;
  padding-left: 4px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}
  
</style>