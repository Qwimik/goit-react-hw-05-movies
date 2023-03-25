import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default function Loading() {
  return (
    <LoadingWrapper>
      <span>Loading</span>
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#242424"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoadingWrapper>
  );
}
