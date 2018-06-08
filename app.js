new Vue({
    el: "#app",
    data: {
      startDate: moment().format('YYYY-MM-DD'), // today
      numberOfDays: 30,
      countryCode: 'US',
      dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    },
    computed: {
      days() {
        let days = [];
        for (let i = 0; i < this.numberOfDays; i++) {
          current = moment(this.startDate, 'YYYY-MM-DD').add(i, 'days');
          days.push({
            number: parseInt(moment(current).format('DD')), // 1 - 30
            dayOfWeek: parseInt(moment(current).format('e')), // 0-6 (0 = sunday, 6 = saturday)
            month: moment(current).format('MMMM YYYY') // June 2018
          });
        }
        return days;
      },
      months() {
        months = this.days.map(day => day.month);
        return [...new Set(months)];
      }
    },
    methods: {
      isWeekend(day) {
        return (day.dayOfWeek === 0 || day.dayOfWeek === 6);
      },
      filterDays(month) {
        return this.days.filter(day => day.month === month);
      }
    }
  })