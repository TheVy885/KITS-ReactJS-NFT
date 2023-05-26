const { default: styled } = require("styled-components");

const StyledFollow = styled.div`
`;

export const Follow = ({ number, imgUser, nameUser, email, sttFollow }) => {
  return (
    <StyledFollow>
      <div className="follow">
        <div className="number">{number}</div>
        <img src={imgUser} alt="" />
        <div className="name-user">
          {nameUser}
          <div className="email">{email}</div>
        </div>
        <button>{sttFollow}</button>
      </div>
    </StyledFollow>
  );
};
