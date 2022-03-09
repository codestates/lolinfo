import React from "react";
import styled from "styled-components";
import Rank from "./userProfileComponents/Rank";
import UserProfileImg from "./userProfileComponents/ProfileImg";

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(1fr, auto) minmax(0px, auto) minmax(3fr, auto);
  grid-template-rows: minmax(1fr, auto);
  grid-template-areas: "user-profile . solo-rank free-rank";

  background-color: ${(props) => props.theme.recordBgColor};

  padding: 1rem;
  margin-bottom: 1rem;

  img {
    object-fit: cover;
    width: ${(props) => String(props.imgSize) + "rem"};
    height: ${(props) => String(props.imgSize) + "rem"};

    border-radius: 20%;
  }
`;

function UserProfile({ profileData }) {
  const { leaguePoints, wins, losses, tier, rank, queueType, profileIcon, summonerName } = profileData;

  let rankType = queueType;
  rankType = rankType.toLowerCase().split("_");

  if (rankType[1] === "solo") {
    rankType[1] = "솔로랭크";
  } else if (rankType[1] === "free") {
    rankType[1] = "자유랭크";
  }

  return (
    <ProfileWrapper imgSize={6}>
      <UserProfileImg gameID={summonerName} icon={profileIcon} />
      <Rank name="solo-rank" lp={leaguePoints} wins={wins} losses={losses} tier={tier} rank={rank} rankType={rankType[1]} />
      {/* <Rank name="free-rank" /> */}
    </ProfileWrapper>
  );
}

export default UserProfile;
