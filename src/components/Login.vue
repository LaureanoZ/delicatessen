<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 15px;">
            <div class="card-body p-5 text-center">

              <div class="mb-md-5 mt-md-4 pb-5">

                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-3">Please enter your Email and Password!</p>

                <b-form @submit.prevent="handleSubmit">

                  <div class="col-md-12 mb-4 mt-4 pb-2">
                    <div class="form-group">
                      <input type="email"
                             placeholder="Email"
                             v-model="user.email"
                             id="logInEmail" name="logInEmail"
                             class="form-control form-control-lg"
                             :class="{ 'is-invalid': submitted && $v.user.email.$error }"/>
                      <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                        <span v-if="!$v.user.email.required">Email Incompleto</span>
                        <span v-if="!$v.user.email.email">Email is invalid</span>
                      </div>
                    </div>
                  </div>

                  <div class="form-group col-md-12 mb-4 mt-4 pb-2">
                    <input type="password"
                           v-model="user.password"
                           placeholder="Contraseña"
                           id="logInpassword" name="logInpassword"
                           class="form-control form-control-lg"
                           :class="{ 'is-invalid': submitted && $v.user.password.$error }"/>
                    <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                      <span v-if="!$v.user.password.required">Completar Contraseña</span>
                      <span v-if="!$v.user.password.minLength">La contraseña debe tener al menos 6 caracteres.</span>
                    </div>
                  </div>

                  <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                  <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                </b-form>

              </div>

              <div>
                <p class="mb-0">Don't have an account? <router-link to="/register" href="#!" class="text-white-50 fw-bold">Sign Up</router-link></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<script>
import {validationMixin} from "vuelidate";
import {required, minLength, email} from "vuelidate/lib/validators";
import {mapGetters} from 'vuex'

export default {
  name: "Login",
  mixins: [validationMixin],
  created() {
    if(this.getUser) {
      this.$router.replace('/')
    }
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      submitted: false
    };
  },
  validations: {
    user: {
      email: {required, email},
      password: {required, minLength: minLength(6)},
    }
  },
  methods: {
    handleSubmit() {
      this.submitted = true;

      // Stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$store.dispatch('login', this.user)
    },
  },
  computed: {
    ...mapGetters([
      'getUser'
    ]),
  },
  watch: {
    getUser(newVal) {
      // // eslint-disable-next-line no-debugger
      // debugger
      if(newVal) {
        this.$router.replace('/')
      }
    }
  }
};
</script>


<style scoped>
.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
</style>
