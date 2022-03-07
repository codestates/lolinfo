import React from "react";
import styled from "styled-components";

const ProfileImg = styled.div`
  grid-area: user-profile;
  display: grid;
  grid-template-columns: repeat(2, minmax(1fr, auto));
  grid-template-rows: minmax(1fr, auto);
  grid-template-areas: "profile-img user-id";

  justify-content: center;
  margin: 0;

  > .user-id {
    grid-area: user-id;
    margin: 0 0.5rem;
    display: grid;
    justify-content: flex-start;
    align-items: center;

    > span {
      font-size: 1.2rem;
    }

    > button {
      border-radius: 5%;
      border: none;
      background-color: DodgerBlue;

      width: 120%;
      height: 55%;
      color: white;

      transform: translateX(-8%);
    }
  }
`;
function UserProfileImg({ gameID }) {
  return (
    <ProfileImg className="user-profile">
      <img className="profile-img" src="https://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/4762.png" alt="Profile Icon" />
      <div className="user-id">
        <span>{gameID}</span>
        <button>업데이트</button>
      </div>
    </ProfileImg>
  );
}

export default UserProfileImg;
