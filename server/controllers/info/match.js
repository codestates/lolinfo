const axios = require("axios").default;
const infoAll = require("../getsourceinfo/infoAll");
module.exports = async (req, res) => {
  let nickname = req.query.nickname;
  let [int1, int2] = [req.query.int1, req.query.int2];
  let puuid = await infoAll.nametoPuuid(nickname);
  let version = await infoAll.version();
  let matchList = await infoAll.matchList(puuid.data.puuid, int1, int2); //두번째 인자 int1 세번째 인자 int2
  if (!matchList) return res.status(400).send({});
  let data = {
    kda: [],
    gold: [],
    gametype: [],
    gametime: [],
    mata: [],
    chamId: [],
    name: [],
    spell: [],
    doeswin: [],
    icon: [],
    panta: [],
    item: [],
    perks: [],
    deepinf: [],
  };
  //   let temp = [];
  //   for (let i = 0; i < matchList.length; i++) {
  //     temp.push(ma(matchList[i]));
  //   }
  //   Promise.all(temp).then((data) => {
  //     console.log(data);
  //   });

  for (let i = 0; i < matchList.length; i++) {
    let temp = await infoAll.oneMatchInfo(matchList[i]);
    if (i === 0) {
      data.mata.push(temp.metadata);
      data.gametime.push(temp.info.gameDuration);
      data.gametype.push(temp.info.gameType);
    }
    // console.log(temp.info.participants[0].assists);
    for (let j = 0; j < temp.info.participants.length; j++) {
      data.doeswin.push(temp.info.participants[j].win);
      data.spell.push([temp.info.participants[j].sumaner1Casts, temp.info.participants[j].summoner1Id, temp.info.participants[j].summoner2Casts, temp.info.participants[j].summoner2Id]);
      // data.spell[i].push(temp.info.participants.summoner1Casts);
      // data.spell[i].push(temp.info.participants.summoner1Id);
      // data.spell[i].push(temp.info.participants.summoner2Casts);
      // data.spell[i].push(temp.info.participants.summoner2Id);
      data.gold.push(temp.info.participants[j].goldEarned);
      data.kda.push(temp.info.participants[j].challenges.kda);
      // data.deepinf[i].push()
      // temp.info.participants.assists
      // temp.info.participants.challenges.kda
      // temp.info.participants.challenges.killParticipation
      // temp.info.participants.challenges.perfectGame
      // temp.info.participants.champLevel
      // temp.info.participants.championId
      // temp.info.participants.championName
      // temp.info.participants.deaths
      // temp.info.participants.kills
      // temp.info.participants.magicDamageDealtToChampions
      // temp.info.participants.magicDamageTaken
      // temp.info.participants.physicalDamageDealtToChampions
      // temp.info.participants.physicalDamageTaken
      // temp.info.participants.summonerName
      // temp.info.participants.teamId
      // temp.info.participants.totalDamageDealt
      // temp.info.participants.totalDamageDealtToChampions
      // temp.info.participants.tripleKills
      // temp.info.participants.trueDamageDealt
      // temp.info.participants.trueDamageDealtToChampions
      data.icon.push(temp.info.participants[j].profileIcon);
      // data.panta.push(temp.info.participants[j].pentaKills);
      data.name.push(temp.info.participants[j].summonerName);
      data.item.push([
        temp.info.participants[j].item0,
        temp.info.participants[j].item1,
        temp.info.participants[j].item2,
        temp.info.participants[j].item3,
        temp.info.participants[j].item4,
        temp.info.participants[j].item5,
        temp.info.participants[j].item6,
      ]);
      // data.item[i].push(temp.info.participants.item0);
      // data.item[i].push(temp.info.participants.item1);
      // data.item[i].push(temp.info.participants.item2);
      // data.item[i].push(temp.info.participants.item3);
      // data.item[i].push(temp.info.participants.item4);
      // data.item[i].push(temp.info.participants.item5);
      // data.item[i].push(temp.info.participants.item6);
      data.perks.push(temp.info.participants[j].perks);
    }
  }
  //   console.log(matchdata);
  return res.status(200).send({ version, data });
};
