var app = new Vue({
    el: '#app',
    data: {
        customers: [],
        formData: {

        }
    },

    // methods that implement data logic. Note there's no DOM manipulation here at all.
    methods: {
        getCustomer: function (customer) {
            console.log('customer id -> ' + customer.id)
            var vm = this;
            axios.get('customers/' + customer.id)
                .then(function (response) {
                    vm.formData = response.data;
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        submitData: function() {
            var vm = this;
            axios.put('customers', vm.formData)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        getCustomers: function () {
            var vm = this;
            axios.get('customers')
                .then(function (response) {
                    vm.customers = resonse.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },

    created() {
        fetch('customers')
        .then((res) => res.json())
        .then((data) => {
          this.customers = data;
        });
    }
  });