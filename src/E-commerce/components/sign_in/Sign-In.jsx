import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormInput from '../form/FormInput';
import './styles.scss'
import CustomButton from '../custom/CustomButton';
import { useDispatch } from 'react-redux';
import { emailSigninStart, googleSigninStart } from '../../../redux/userReducer/userAction';

const SignIn = () => {
  const [showHidePassword, changeShowHidePassword] = useState(false);
  const dispatch = useDispatch()

  const HandleSubmit = async values => {
    const { email, password, } = values
    dispatch(emailSigninStart(email, password))
  }

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Please Enter your password'),
    }),
    onSubmit: HandleSubmit,
    enableReinitialize: true
    
  });
  return (
    <div className="sign-in">
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your Email and password</span>
      <form onSubmit={formik.handleSubmit}>
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


        <div onClick={() => changeShowHidePassword(!showHidePassword)}>
         {showHidePassword  ? "Hide" : "Show"}
        </div>
        <FormInput
          name="password"
          type={showHidePassword ? "text" : "password"}        
          handleChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          label="Password"
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <div className="buttons">
        <CustomButton type="submit">Sign In</CustomButton>
        {/* <CustomButton onClick={signInWithGoogle} googleSignIn >{' '} Sign In with Google {' '}</CustomButton> */}
        <CustomButton type="button" onClick={()=> dispatch(googleSigninStart())} googleSignIn >{' '} Sign In with Google {' '}</CustomButton>
        </div>
        </form>
    </div>
  );
};

export default SignIn