var app = new Vue({
    el: '#app',
    data: {
      customers: []
    },
    created() {
      fetch('http://localhost:8080/springrest/customers')
        .then((res) => res.json())
        .then((data) => {
          this.customers = data;
        });
    }
  });