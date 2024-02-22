<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <!--          <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">-->
          <div class="card bg-dark text-white shadow-2-strong card-registration" style="border-radius: 15px;">

            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Formulario de Registro</h3>

              <form @submit.prevent="handleSubmit">

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-group">
                      <input type="text"
                             placeholder="Nombre"
                             v-model="user.firstName"
                             id="firstName"
                             name="firstName"
                             class="form-control form-control-lg "
                             :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"/>
                      <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback"> Nombre Incompleto
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <div class="form-group">
                      <input type="text"
                             placeholder="Apellido"
                             v-model="user.lastName"
                             id="lastName" name="lastName"
                             class="form-control  form-control-lg"
                             :class="{ 'is-invalid': submitted && $v.user.lastName.$error }"/>
                      <div v-if="submitted && !$v.user.lastName.required" class="invalid-feedback">Apellido Incompleto
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">

                  <div class="col-md-6 mb-4 mt-4 ">
                    <div class="form-group">
                      <input type="Number"
                             placeholder="Edad"
                             v-model="user.birthday"
                             id="birthday" name="birthday"
                             class="form-control  form-control-lg"
                             :class="{ 'is-invalid': submitted && $v.user.birthday.$error }"/>
                      <div v-if="submitted && !$v.user.birthday.required" class="invalid-feedback">Edad Incompleta</div>
                    </div>
                  </div>

                  <div class="col-md-6 mb-4 mt-4 pb-2">
                    <div class="form-group">
                      <input type="email"
                             placeholder="Email"
                             v-model="user.email"
                             id="email" name="email"
                             class="form-control form-control-lg"
                             :class="{ 'is-invalid': submitted && $v.user.email.$error }"/>
                      <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                        <span v-if="!$v.user.email.required">Email Incompleto</span>
                        <span v-if="!$v.user.email.email">Email is invalid</span>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="row">

                  <div class="form-group col-md-6 mb-4 mt-4 pb-2">
                    <input type="password"
                           v-model="user.password"
                           placeholder="Contraseña"
                           id="password" name="password"
                           class="form-control form-control-lg"
                           :class="{ 'is-invalid': submitted && $v.user.password.$error }"/>
                    <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                      <span v-if="!$v.user.password.required">Completar Contraseña</span>
                      <span v-if="!$v.user.password.minLength">La Contraseña Debe Tener al Menos 6 Caracteres.</span>
                    </div>
                  </div>

                  <div class="form-group col-md-6 mb-4 mt-4 pb-2">
                    <input type="password"
                           v-model="user.confirmPassword"
                           placeholder="Repetir Contraseña"
                           id="confirmPassword"
                           name="confirmPassword"
                           class="form-control form-control-lg"
                           :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }"/>
                    <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                      <span v-if="!$v.user.confirmPassword.required">Completar Repetir contraseña</span>
                      <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Las Contraseñas Deben Coincidir</span>
                    </div>
                  </div>

                </div>

                <div class=" ">
                  <input class=" mt-4 btn btn-outline-light btn-lg" type="submit" value="Registrar"/>
                </div>

                <div>
                  <p class="mb-0 mt-5">Already Have an Account?
                    <router-link to="login" href="#" class="text-white-50 fw-bold">Log In</router-link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {required, email, minLength, sameAs} from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        birthday: ""
      },
      submitted: false
    };
  },
  validations: {
    user: {
      firstName: {required},
      lastName: {required},
      email: {required, email},
      password: {required, minLength: minLength(6)},
      confirmPassword: {required, sameAsPassword: sameAs('password')},
      birthday: {required}
    }
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.signIn();
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
    },

    signIn() {
      if (this.submitted === true) {
        axios.post('https://6238c7400a54d2ceab7a0c3e.mockapi.io/usuarios', {
          email: this.user.email,
          password: this.user.password,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          birthday: this.user.birthday,
        })
        // this.$store.dispatch('postRegister', this.user)

            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });

      } else {
        alert('Debes completar todos los campos')
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

.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: .75em;
  padding-right: .75em;
}

.card-registration .select-arrow {
  top: 13px;
}
</style>
