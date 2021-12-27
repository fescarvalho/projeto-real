import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid #ddd;
  }

  a {
    margin-top: 5px;
    width: 40px;
    display: flex;
  }

  @media (max-width: 425px) {
    span#nome {
      display: none;
    }
  }
  @media (max-width: 344px) {
    span#nome {
      display: inline;
    }
    span#email {
      display: none;
    }
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NovoAluno = styled(Link)`
  display: block;
  padding: 20px 0 10px 0;
`;
