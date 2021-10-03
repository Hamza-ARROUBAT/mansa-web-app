import React, { useState } from 'react';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { User } from '@styled-icons/boxicons-regular/User';
import { LockPassword } from '@styled-icons/remix-line/LockPassword';
import Logo from 'assets/images/svg/icons/logo.svg';

const Container = styled.div`
  display: grid;
  justify-items: flex-end;
  align-items: center;
`;

const Card = styled.div`
  display: grid;
  gap: 1.5em 0;
  background-color: #fff;
  box-shadow: 0 0px 15px rgba(64, 64, 64, 0.5);
  grid-auto-rows: 0fr;
  border-radius: 15px;
  justify-content: center;
  padding: 2em 4em;
`;

const ImgContainer = styled.div`
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

const AuthForm = styled.form`
  display: grid;
  gap: 25px 0;
  padding: 25px 0;
`;
const FormInputContainer = styled.div`
  display: grid;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 0fr auto 0fr;
  align-items: center;
  gap: 0 10px;
  border: 2px solid hsl(0, 0%, 60%);
  border-radius: 10px;
  align-items: center;
  padding: 0.6em 0 0.6em 0.6em;

  transition: border 0.2s;

  :focus-within {
    border-color: hsl(214deg 100% 45%);

    svg {
      color: hsl(214deg 100% 45%);
    }
  }
`;

const LeftInputIcon = styled.div`
  svg {
    width: 25px;
    transition: color 0.3s;
  }
`;

const InputWrapper = styled.div`
  input {
    ::-webkit-input-placeholder {
      font-size: 18px !important;
    }
    ::-moz-placeholder {
      /* Firefox 18- */
      font-size: 18px !important;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      font-size: 18px !important;
    }
    width: 100%;
    border: none;
    outline: none;
    padding: 0 5px;
    font-size: 18px;
  }
`;

const ErrorMessageContainer = styled.div`
  height: 5px;
  padding: 5px;
  p {
    margin: 0;
    color: red;
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;

  button {
    cursor: pointer;
    padding: 0.5em 1em;
    background-color: hsl(214deg 100% 45%);
    border-radius: 30px;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    border: 2px solid hsl(214deg 100% 45%);
    transition: background 0.3s, color 0.4s;

    :hover {
      background-color: #fff;
      color: hsl(214deg 100% 45%);
    }
  }
`;

export default function Login() {
  const [user, setUser] = useState({});
  const onSubmit = (data) => {
    // const isFirstLogin = useSelector(state => state.user.data.isFirstLogin)
    // changeConnectionState(dispatch, isConnected)
    // history.push({
    //   pathname: `/${locale}${formatMessage({
    //     id: routes.home.route,
    //   })}`,
    //   state: formData,
    // });
    // setIsFirstLogin(true);
    // setStep(2);
    // Axios({
    //   method: 'get',
    //   url: `http://localhost:5000/users/is-first-time-login/${data.username}`,
    // })
    //   .then((res) => {
    //     if (res.data === true) {
    //       setUser({ username: data.username });
    //       setIsFirstLogin(true);
    //     } else {
    //       setUser({ username: data.username });
    //       setStep(2);
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  // form
  const schema = yup.object().shape({
    username: yup.string().required('Ce champ est requis'),
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Card>
        <ImgContainer>
          <img src={Logo} alt="Logo" />
        </ImgContainer>

        <AuthForm id="form" onSubmit={handleSubmit(onSubmit)}>
          <FormInputContainer>
            <InputContainer>
              <LeftInputIcon left={true}>
                <User />
              </LeftInputIcon>
              <InputWrapper>
                <input
                  autocomplete="off"
                  type="text"
                  placeholder="Votre Identifiant"
                  name="username"
                  {...register('username')}
                />
              </InputWrapper>
            </InputContainer>
            <ErrorMessageContainer>
              <p>{!!errors.username && errors.username.message}</p>
            </ErrorMessageContainer>
          </FormInputContainer>
          <FormInputContainer>
            <InputContainer>
              <LeftInputIcon>
                <LockPassword />
              </LeftInputIcon>
              <InputWrapper>
                <input
                  autocomplete="off"
                  type="password"
                  placeholder="Votre mot de passe"
                  name="password"
                  {...register('password')}
                />
              </InputWrapper>
            </InputContainer>
            <ErrorMessageContainer>
              <p>{!!errors.password && errors.password.message}</p>
            </ErrorMessageContainer>
          </FormInputContainer>
        </AuthForm>

        <ButtonContainer>
          <button type="submit" form="form">
            Login
          </button>
        </ButtonContainer>
      </Card>
    </Container>
  );
}
