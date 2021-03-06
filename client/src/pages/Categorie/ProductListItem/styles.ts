import styled from "styled-components";
import { Heart } from '@styled-icons/boxicons-solid'

type HeartIconProps = {
  status: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;    
  width: 200px;
  height: 240px;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-radius: 4px;
  padding: 2rem;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;  

  @media (min-width: 1080px) {
    max-width: 200px;    
    background-color: var(--background-contrast);
  }

  div {
    width: 100%;
    align-items: flex-start;    
    padding: 10px;
  }

  img {
    width: 100px;

    @media (min-width: 1080px) {    
      width: 130px;      
    }
  }

  section {
    display: flex;    
    width: 12rem;    
    flex-direction: column;    
    
    padding-top: var(--small);
    gap: 5px;    

    h1 {
      font-size: 1.5rem;
      color: var(--title);    
    }

    span {
      font-size: 1.2rem;
      color: var(--highlight);
    }

    @media (min-width: 1080px) {    
      width: 100%;
      
      h1 {
        font-size: 1.9rem;
      }

      span {
        font-size: 1.5rem;
      }
    }
  }
`;

export const HeartIcon = styled(Heart)<HeartIconProps>`
  width: 20px;
  color: ${({ status }) => 
    status ?  '#DC143C' : '#A0A0A0'  
  };
  cursor: pointer;  
  @media (min-width: 1080px) {    
    width: 25px;      
  }
`;