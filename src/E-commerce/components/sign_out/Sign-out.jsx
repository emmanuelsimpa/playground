import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import FormInput from '../form/FormInput';
import './styles.scss'
import CustomButton from '../custom/CustomButton';
import {auth, createUserProfileDocument} from '../../../firebase/Utils';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../../redux/userReducer/userAction';

const SignUp = () => {
  const dispatch = useDispatch()

    const Schema = Yup.object().shape({
      displayName: Yup.string().min(2, "Mininum 2 characters").max(30, "Maximum 30 characters").required("Display Name is required"),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required("This field is required").matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
      confirmPassword: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        )
      })
    });

// let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let pwordLength = 8;
// let password = '';

// const array = new Uint32Array(chars.length);
// window.crypto.getRandomValues(array);

// for (let i = 0; i < pwordLength; i++) {
//   password += chars[array[i] % chars.length];
// }


// console.log(`Password is ${password} `);

    const HandleSubmit = async values => {
      const {displayName, email, password, confirmPassword} = values
      if(confirmPassword === password){
        dispatch(signUpStart({ displayName, email, password }))
      }
    }

    const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
      email: '',
      displayName: '',
    },

    validationSchema: Schema,

    onSubmit: HandleSubmit
    });

  return (
    <div className="sign-in">
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your Email and password</span>
      <form onSubmit={formik.handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          handleChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.displayName}
          label="Display Name"
        />
        <span className="error" style={{ color: "red" }}>
              {formik.errors.displayName}
        </span>

        <FormInput
          name="email"
          type="email"
          handleChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          label="Email"
        />
        <span className="error" style={{ color: "red" }}>
              {formik.errors.email}
        </span>

         <FormInput
              type="password"
              name="password"
              onBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              value={formik.values.password}
              label="Password"
            />
            <span className="error" style={{ color: "red" }}>
              {formik.errors.password}
            </span>

          <FormInput
              type="password"
              name="confirmPassword"
              onBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              value={formik.values.confirmPassword}
              label="Confirm Password"
            />
            <span className="error" style={{ color: "red" }}>
              {formik.errors.confirmPassword}
            </span>

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;