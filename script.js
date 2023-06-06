new Vue({
    data() {
        return {
          form: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            privacyPolicy: false
          },
          errors: {}
        };
      },
      methods: {
        submitForm() {
          this.errors = {}; 
          if (!this.validateForm()) {
            return;
          }
    
          this.resetForm();
        },
        validateForm() {
          let isValid = true;
    
          if (this.form.firstName.length === 0) {
            this.errors.firstName = 'Imię jest wymagane.';
            isValid = false;
          }
    
          if (this.form.firstName.length > 32) {
            this.errors.firstName = 'Imię nie może być dłuższe niż 32 znaki.';
            isValid = false;
          }
    
          if (this.form.lastName.length === 0) {
            this.errors.lastName = 'Nazwisko jest wymagane.';
            isValid = false;
          }
    
          if (this.form.lastName.length > 48) {
            this.errors.lastName = 'Nazwisko nie może być dłuższe niż 48 znaki.';
            isValid = false;
          }
    
          if (!this.isValidEmail(this.form.email)) {
            this.errors.email = 'Nieprawidłowy adres email.';
            isValid = false;
          }
    
          const phoneRegex = /^[0-9]{6,15}$/;
          if (!phoneRegex.test(this.form.phone)) {
            this.errors.phone = 'Nieprawidłowy numer telefonu.';
            isValid = false;
          }
    
          if (this.form.message.length > 250) {
            this.errors.message = 'Wiadomość nie może być dłuższa niż 250 znaków.';
            isValid = false;
          }
    
          if (!this.form.privacyPolicy) {
            this.errors.privacyPolicy = 'Musisz zaakceptować politykę prywatności.';
            isValid = false;
          }
    
          return isValid;
        },
        isValidEmail(email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        },
        resetForm() {
          this.form.firstName = '';
          this.form.lastName = '';
          this.form.email = '';
          this.form.phone = '';
          this.form.message = '';
          this.form.privacyPolicy = false;
        }
    }
}).$mount('#app');