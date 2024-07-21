/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Card from "../../../components/Card";
import { Path } from "../../../components/utils/types";
import FadeInText from "../../../components/FadeInText";

const Daos = () => {
  const prev: Path = {
    path: "decentrallized-finance-(defi)",
  };

  const next: Path = {
    path: "other-use-cases",
  };

  return (
    <Card
      prev={prev}
      next={next}
      title=" Decentralized Autonomous Organizations"
      bgImg={"bg-card-header"}
    >
      <p>
        The governance of Web3 networks and their decentralized applications has
        two parts: social governance and algorithmic governance.
      </p>
      <h3 className="mt-[2rem] font-semibold text-[2.3rem] text-color-dark-blue capitalize">
        Social Governance
      </h3>
      <FadeInText>
        Even though many processes are automated, decisions about what the rules
        should be or how to change them are made through public discussion and
        collective action by everyone involved in the network.
      </FadeInText>

      <h3 className="mt-[2rem] font-semibold text-[2.3rem] text-color-dark-blue capitalize">
        Algorithmic Governance
      </h3>
      <FadeInText>
        This involves rules written in computer code, like blockchain protocols
        or smart contracts. These rules are automatically enforced by a network
        of computers.
      </FadeInText>
      <FadeInText className="mt-[1rem]">
        In Web3, token rewards play a key role in coordinating the network's
        economic activities. While we can automate some organizational tasks and
        enforce rules with code, the content and updates of the code depend on
        the input and agreement of the network's participants.
      </FadeInText>

      <FadeInText className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
        Decentralized Autonomous Organizations (DAOs) are organizations managed
        in whole or in part by decentralized computer program, with voting and
        finances handled through a blockchain. They are co-steered by the human
        agents acting as node operators who all have different preferences and
        goals. They have collective influence over the general network
        behaviour. It is assumed that each stakeholder in the network has their
        own individual self-interest, and that these interests are not always
        fully aligned.
      </FadeInText>
      <FadeInText>
        Stakeholders in the network propose or vote for policy changes that will
        be formalized as protocol upgrades, reflecting their own self-interest.
        The human agents are part of the system and actively participate in the
        systems, either by using the services of a DAO (users), by contributing
        code to the network constitution (developers), or by contributing to
        maintain network services. In the case of the Bitcoin network, miners
        individually contribute to collective maintenance of a P2P payment
        network. In the case of MakerDAO contributors are rewarded for the
        collective maintenance of the Stable Token DAI. In the case of Aragon
        network actors are/were rewarded for the collective maintenance for a
        DAO platform. As a result, there are feedback-loops between the
        individual actors and the whole network. Since individual actions affect
        the system, who all have interdependencies with external events, the
        system as a whole evolves over time.
      </FadeInText>
    </Card>
  );
};

export default Daos;
