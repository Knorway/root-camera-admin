/* eslint-disable react/jsx-one-expression-per-line */
import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Page from 'src/components/Page';
import { loginUser, LOGIN_AUTH } from 'src/modules/auth';
import { useRequest } from 'src/utils/useRequest';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error } = useRequest(LOGIN_AUTH, 'auth');

  const onLogin = (form, { setSubmitting }) => {
    dispatch(
      loginUser({ query: false, params: form }, (user) => {
        localStorage.setItem('auth', JSON.stringify(user));
        navigate('/app/dashboard', { replace: true });
      })
    );
    setSubmitting(false);
  };

  return (
    <Page className={classes.root} title="로그인">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('올바르지 않은 이메일 양식입니다')
                .max(255)
                .required('필수 입력항목입니다'),
              password: Yup.string()
                .max(255)
                .required('필수 입력항목입니다')
            })}
            onSubmit={onLogin}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    루트 어드민
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Admin dashboard for managing products of root-camera
                  </Typography>
                </Box>
                <Box mt={3} mb={1}>
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    관리자 계정으로 로그인 하십시오
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="이메일"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="비밀번호"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Typography align="center">
                    데모 계정으로{' '}
                    <Typography
                      color="primary"
                      style={{
                        display: 'inline-block',
                        marginBottom: '8px',
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        dispatch(
                          loginUser(
                            {
                              query: false,
                              params: {
                                email: 'demo@demo.com',
                                password: '123123'
                              }
                            },
                            (user) => {
                              localStorage.setItem(
                                'auth',
                                JSON.stringify(user)
                              );
                              navigate('/app/dashboard', { replace: true });
                            }
                          )
                        );
                      }}
                    >
                      로그인
                    </Typography>
                    하기
                  </Typography>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    로그인
                  </Button>
                </Box>
                {error && (
                  <Typography
                    color="error"
                    style={{
                      marginTop: 10
                    }}
                  >
                    {error.response.data.message}
                  </Typography>
                )}
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
