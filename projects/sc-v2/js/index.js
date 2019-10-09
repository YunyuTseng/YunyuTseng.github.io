var app = new Vue({
  el: '#app',
  data: {
    // 出生日期
    dateOfBirth: {
      year: '1980',
      month: '01',
      date: '01'
    }
  },
  computed: {
    getDays() {
      const { year, month } = this.dateOfBirth;

      return this.daysInMonth(year, month, 0);
    }
  },
  methods: {
    // 取得出生年份數組
    yearList(from) {
      // 當前年份
      const currentYear = new Date().getFullYear();
      const result = [];

      for (let year = from; year <= currentYear; year++) {
        result.push(year);
      }

      return result;
    },
    daysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    }
  }
});
